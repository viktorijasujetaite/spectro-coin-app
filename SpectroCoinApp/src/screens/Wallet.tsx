import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ListRenderItemInfo} from 'react-native';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';
import {Text} from 'react-native-ui-lib';
import BalanceListItem from '../components/BalanceListItem';
import {useAppSelector, useAppDispatch} from '../app/hooks';
import {loadBalance} from '../app/walletSlice';
import {getUserData} from '../api';
import {AppStrings} from '../constants/strings';
import {Colors} from '../constants/colors';

const Wallet = ({componentId}: NavigationComponentProps) => {
  const [userData, setUserData] = useState<CurrencyBalanceItem[]>([]);

  const balance = useAppSelector(state => state.wallet.balance);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBalance(userData));
  }, [dispatch, userData]);

  const fetchData = async () => {
    if (!balance.length) {
      setUserData(await getUserData());
    }
  };

  fetchData();

  const getCalculatedBalance = () => {
    const balanceDollarValues = balance.map(
      currency => currency.balance * (1 / currency.rate),
    );
    const sumDollar = balanceDollarValues.reduce(
      (partialSum, item) => partialSum + item,
      0,
    );

    return parseFloat(`${sumDollar}`).toFixed(2);
  };

  const openCurrencyScreen = (item: CurrencyBalanceItem) => {
    Navigation.push(componentId, {
      component: {
        name: 'scApp.CurrencyScreen',
        passProps: {
          item,
        },
        options: {
          topBar: {
            backButton: {showTitle: false, color: Colors.white},
            background: {color: Colors.defaultDark},
          },
        },
      },
    });
  };

  const renderItem = ({item}: ListRenderItemInfo<CurrencyBalanceItem>) => (
    <BalanceListItem item={item} onPress={openCurrencyScreen} />
  );

  const getHeaderComponent = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.balanceText}>{AppStrings.BALANCE_TITLE}</Text>
        <Text style={styles.balanceValue}>
          {AppStrings.CURRENCY_SIGN_DOL} {getCalculatedBalance()}
        </Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={balance}
        renderItem={renderItem}
        ListHeaderComponent={getHeaderComponent}
        style={styles.listContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: Colors.accentContainer,
  },
  headerContainer: {
    backgroundColor: Colors.lightContainer,
    padding: 50,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 70,
    borderRadius: 15,
  },
  balanceText: {
    fontSize: 20,
    textAlign: 'center',
  },
  balanceValue: {
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.white,
  },
});

export default Wallet;
