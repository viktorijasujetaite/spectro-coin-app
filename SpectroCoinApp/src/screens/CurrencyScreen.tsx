import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
} from 'react-native';
import {Text} from 'react-native-ui-lib';
import {Colors} from '../constants/colors';
import {AppStrings} from '../constants/strings';

const CurrencyScreen = ({item}: {item: CurrencyBalanceItem}) => {
  const [dollarValue, setDollarValue] = useState(0);
  const [cryptoValue, setCryptoValue] = useState(item.rate);

  const setDollar = (text: string) => {
    const fieldValue = Number.parseFloat(text) || 0;
    setCryptoValue(fieldValue);
    setDollarValue(fieldValue / item.rate);
  };

  const setCrypto = (text: string) => {
    const fieldValue = Number.parseFloat(text) || 0;
    setDollarValue(fieldValue);
    setCryptoValue(fieldValue * item.rate);
  };

  const renderExchangeCalculator = () => {
    return (
      <KeyboardAvoidingView>
        <Text style={styles.defaultText}>{AppStrings.CALCULATOR_TITLE}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="numeric"
            value={dollarValue ? `${dollarValue}` : undefined}
            placeholder={AppStrings.CURRENCY_SIGN_DOL}
            style={styles.inputField}
            onBlur={Keyboard.dismiss}
            onChangeText={setCrypto}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="numeric"
            value={dollarValue ? `${cryptoValue}` : undefined}
            placeholder={item.id}
            style={styles.inputField}
            onBlur={Keyboard.dismiss}
            onChangeText={setDollar}
          />
        </View>
      </KeyboardAvoidingView>
    );
  };

  const renderHeader = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {item.name} ( {item.id} )
      </Text>
      <Text style={styles.subtitle}>{AppStrings.CURRENT_BALANCE}</Text>
      <Text style={styles.defaultText}>
        {item.id} {item.balance}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderExchangeCalculator()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultDark,
    flex: 1,
  },
  titleContainer: {
    backgroundColor: Colors.accentContainer,
    padding: 40,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 70,
    borderRadius: 15,
  },
  defaultText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 25,
    paddingBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.white,
    fontSize: 15,
    paddingBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  inputField: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20,
    margin: 20,
    marginTop: 40,
    fontSize: 20,
    width: '50%',
  },
});

export default CurrencyScreen;
