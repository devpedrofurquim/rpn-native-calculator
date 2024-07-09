import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import React, { useState } from 'react';

import { useDispatch, useSelector, UseSelector } from 'react-redux';
import Button from './src/components/atoms/Button';
import { RpnState } from './src/types/reduxTypes';
import { pop, push, clear, calculate } from './src/redux/counter/counterSlice';


const App = () => {
  // Read Data from store
  const { stack1, stack2, stack3 } = useSelector((state: { rpn: RpnState }) => state.rpn.stack);  // Change the data by sending action to store
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');

   const handlePush = (stack: 'stack1' | 'stack2' | 'stack3', value : number) => {
    if (!isNaN(value)) {
      dispatch(push({ stack, value }));
      setInputValue(''); // Clear input after push
    }
  };

  const handlePop = (stack: 'stack1' | 'stack2' | 'stack3') => {
    dispatch(pop(stack));
  };

  const handleClear = () => {
    dispatch(clear('stack1'));
    dispatch(clear('stack2'));
    dispatch(clear('stack3'));
  };

  const handleCalculate = (stack: 'stack1' | 'stack2' | 'stack3', operator: '+' | '-' | '*' | '/') => {
    dispatch(calculate({ stack, operator }));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topContainer: {
      padding: 10,
      gap: 5,
      backgroundColor: '#FFF'
    },
    bottomContainer: {
      flex: 1,
    },
    number: {
      color: '#FFF',
      backgroundColor: '#000',
      textAlign: 'right',
      borderWidth: 2,
      borderColor: '#FFF',
      padding: 10,
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 5
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: '#FFF'
    }
  })

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.number}>{stack1.join(' ')}</Text>
      <Text style={styles.number}>{stack2.join(' ')}</Text>
      <Text style={styles.number}>{stack3.join(' ')}</Text>
    </View>
    <View style={styles.bottomContainer}>
      <View style={styles.row}>
        <Button title={'clean'} onPress={() => handleClear('stack1')} />
        <Button title={'pow'} onPress={() => {}} />
        <Button title={'swap'} onPress={() => {}} />
        <Button title={'/'} onPress={() => handleCalculate('stack1', '/')} />
      </View>
      <View style={styles.row}>
        <Button title={'9'} onPress={() => handlePush('stack1', 9)} />
        <Button title={'8'} onPress={() => handlePush('stack2', 8)} />
        <Button title={'7'} onPress={() => handlePush('stack3', 7)} />
        <Button title={'x'} onPress={() => handleCalculate('stack1', '*')} />
      </View>
      <View style={styles.row}>
        <Button title={'6'} onPress={() => handlePush('stack1', 6)} />
        <Button title={'5'} onPress={() => handlePush('stack2', 5)} />
        <Button title={'4'} onPress={() => handlePush('stack3', 4)} />
        <Button title={'-'} onPress={() => handleCalculate('stack1', '-')} />
      </View>
      <View style={styles.row}>
        <Button title={'3'} onPress={() => handlePush('stack1', 3)} />
        <Button title={'2'} onPress={() => handlePush('stack2', 2)} />
        <Button title={'1'} onPress={() => handlePush('stack3', 1)} />
        <Button title={'+'} onPress={() => handleCalculate('stack1', '+')} />
      </View>
      <View style={styles.row}>
        <Button title={'0'} onPress={() => handlePush('stack1', 0)} />
        <Button title={'.'} onPress={() => {}} />
        <Button title={'ENTER'} onPress={() => {}} />
      </View>
    </View>
  </SafeAreaView>
  );
};

export default App;