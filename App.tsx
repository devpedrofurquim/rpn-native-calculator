import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';

import { useDispatch, useSelector, UseSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { decrement, increment } from './src/redux/counter/counterSlice';

const App = () => {
  // Read Data from store
  const count = useSelector((state: any) => state.counter.value)
  // Change the data by sending action to store
  const dispatch = useDispatch()

  return (
      <SafeAreaView>
        <Text>counter: {count}</Text>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text>-</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;