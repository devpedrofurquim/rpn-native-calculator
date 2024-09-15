import React, {useEffect} from 'react'; // Make sure to import React
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => MainApp);
