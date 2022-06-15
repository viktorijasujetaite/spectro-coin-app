import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/colors';

interface Props {
  item: CurrencyBalanceItem;
  onPress: (item: CurrencyBalanceItem) => void;
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
    backgroundColor: Colors.defaultDark,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    color: Colors.white,
  },
});
export default BalanceListItem;
