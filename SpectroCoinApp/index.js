import {Navigation} from 'react-native-navigation';
import Wallet from './src/screens/Wallet';

Navigation.registerComponent('scApp.Wallet', () => Wallet);

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
