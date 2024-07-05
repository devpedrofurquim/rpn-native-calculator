import {View, Text} from 'react-native';
import React from 'react';

import { store } from './src/redux/redux';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>App</Text>
    </View>
    </Provider>
  );
};

export default App;