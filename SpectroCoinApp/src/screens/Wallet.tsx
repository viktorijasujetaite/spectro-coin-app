import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, ListRenderItemInfo} from 'react-native';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';
import {Text} from 'react-native-ui-lib';
import {data} from '../api/mockData.json';
import BalanceListItem from '../components/BalanceListItem';
import {useAppSelector, useAppDispatch} from '../app/hooks';
import {increment, loadBalance} from '../app/walletSlice';
import {getCurrencyData, getPrices} from '../api';

const getHeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.balanceText}>Balance</Text>
    </View>
  );
};

const Wallet = ({componentId}: NavigationComponentProps) => {
  const value = useAppSelector(state => state.wallet.value);
  const balance = useAppSelector(state => state.wallet.balance);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // TODO: populate data with prices on load
      console.log('~~~~~~~ CURRENCY DATA', await getCurrencyData('BTC'));
      console.log('~~~~~~~ PRICES', await getPrices(['BTC', 'ETH']));
    };
    fetchData();

    dispatch(loadBalance(data));
  }, [dispatch]);

  const openCurrencyScreen = (item: CurrencyBalanceItem) => {
    // TODO: remove this usage example
    dispatch(increment());

    Navigation.push(componentId, {
      component: {
        name: 'scApp.CurrencyScreen',
        passProps: {
          item,
        },
        options: {
          topBar: {
            backButton: {showTitle: false, color: '#FFFFFF'},
            background: {color: '#161925'},
          },
        },
      },
    });
  };

  const renderItem = ({item}: ListRenderItemInfo<CurrencyBalanceItem>) => (
    <BalanceListItem item={item} onPress={openCurrencyScreen} />
  );

  return (
    <>
      <Text style={styles.balanceText}>Hook test: {value}</Text>
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
    backgroundColor: '#48639C',
  },
  headerContainer: {
    backgroundColor: '#9BAED6',
    padding: 50,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 70,
    borderRadius: 15,
  },
  balanceText: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Wallet;
