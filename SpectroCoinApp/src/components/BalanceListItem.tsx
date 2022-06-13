import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  item: CurrencyDataItem;
  onPress: (item: CurrencyDataItem) => void;
}

const BalanceListItem: React.FC<Props> = ({item, onPress}: Props) => {
  const onPressHandler = () => onPress(item);

  return (
    <TouchableOpacity style={styles.listItem} onPress={onPressHandler}>
      <Text style={styles.listItemText}>
        {item.name} ( {item.id} )
      </Text>
      <Text style={styles.listItemText}>{item.balance}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#161925',
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
export default BalanceListItem;
