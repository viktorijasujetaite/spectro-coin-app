import React from 'react';
import {View, StyleSheet, FlatList, ListRenderItemInfo} from 'react-native';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';
import {Text} from 'react-native-ui-lib';
import {data} from '../api/mockData.json';
import BalanceListItem from '../components/BalanceListItem';

const getHeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.balanceText}>Balance</Text>
    </View>
  );
};

const Wallet = ({componentId}: NavigationComponentProps) => {
  const openCurrencyScreen = (item: CurrencyDataItem) =>
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

  const renderItem = ({item}: ListRenderItemInfo<CurrencyDataItem>) => (
    <BalanceListItem item={item} onPress={openCurrencyScreen} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={getHeaderComponent}
      style={styles.listContainer}
    />
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
