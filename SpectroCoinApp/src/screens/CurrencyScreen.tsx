import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
} from 'react-native';
import {Text} from 'react-native-ui-lib';

const CurrencyScreen = ({item}: {item: CurrencyDataItem}) => {
  const [dollarValue, setDollarValue] = useState(1);
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
        <Text style={styles.defaultText}>Calculator</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="numeric"
            value={cryptoValue ? `${dollarValue}` : undefined}
            placeholder="$"
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
      <Text style={styles.subtitle}>Current Balance</Text>
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
    backgroundColor: '#161925',
    flex: 1,
  },
  titleContainer: {
    backgroundColor: '#596285',
    padding: 40,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 70,
    borderRadius: 15,
  },
  defaultText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    paddingBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 15,
    paddingBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  inputField: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    marginTop: 40,
    fontSize: 20,
    width: '50%',
  },
});

export default CurrencyScreen;
