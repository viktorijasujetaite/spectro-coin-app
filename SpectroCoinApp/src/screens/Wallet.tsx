import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-ui-lib';
import {data} from '../api/mockData.json';

interface WalletListItem {
  name: string;
  id: string;
  balance: number;
}

const getHeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.balanceText}>Balance</Text>
    </View>
  );
};

const renderItem = ({item}: ListRenderItemInfo<WalletListItem>) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        console.log('~~~~ wiggle');
      }}>
      <Text style={styles.listItemText}>
        {item.name} ( {item.id} )
      </Text>
      <Text style={styles.listItemText}>{item.balance}</Text>
    </TouchableOpacity>
  );
};

const Wallet = () => {
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
  listItem: {
    backgroundColor: '#0C0000',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    color: '#FCFFFF',
  },
});

export default Wallet;
