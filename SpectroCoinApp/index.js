import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import Wallet from './src/screens/Wallet';
import CurrencyScreen from './src/screens/CurrencyScreen';
import {store} from './src/app/store';

Navigation.registerComponent(
  'scApp.Wallet',
  () => props =>
    (
      <Provider store={store}>
        <Wallet {...props} />
      </Provider>
    ),
  () => Wallet,
);
Navigation.registerComponent(
  'scApp.CurrencyScreen',
  () => props =>
    (
      <Provider store={store}>
        <CurrencyScreen {...props} />
      </Provider>
    ),
  () => CurrencyScreen,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'scApp.Wallet',
              options: {
                topBar: {
                  title: {
                    text: 'SC Wallet',
                    fontSize: 30,
                    fontFamily: 'Verdana',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
