import {Navigation} from 'react-native-navigation';
import Wallet from './src/screens/Wallet';
import CurrencyScreen from './src/screens/CurrencyScreen';

Navigation.registerComponent('scApp.Wallet', () => Wallet);
Navigation.registerComponent('scApp.CurrencyScreen', () => CurrencyScreen);

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
