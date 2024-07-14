import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Button from './src/components/atoms/Button';
import { RpnState } from './src/types/reduxTypes';
import { pressNum, clear } from './src/redux/counter/counterSlice';


const App = () => {
  const { stack, inputState } = useSelector((state: { rpn: RpnState }) => state.rpn.stack);
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');

  const handlePressNum = (stack: 'stack', value: number) => {
    if (!isNaN(value)) {
      dispatch(pressNum({ stack, value }));
    }
  }

  const handleClear = () => {
    dispatch(clear());
  }


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
      <Text style={styles.number}>{stack[2]}</Text>
      <Text style={styles.number}>{stack[1]}</Text>
      <Text style={styles.number}>{stack[0] || 0}</Text>
    </View>
    <View style={styles.bottomContainer}>
      <View style={styles.row}>
        <Button title={'clean'} onPress={() => handleClear()} />
        <Button title={'pow'} onPress={() => {}} />
        <Button title={'swap'} onPress={() => {}} />
        <Button title={'/'} onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button title={'9'} onPress={() => handlePressNum('stack', 9)} />
        <Button title={'8'} onPress={() => handlePressNum('stack', 8)} />
        <Button title={'7'} onPress={() => handlePressNum('stack', 7)} />
        <Button title={'x'} onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button title={'6'} onPress={() => handlePressNum('stack', 6)} />
        <Button title={'5'} onPress={() => handlePressNum('stack', 5)} />
        <Button title={'4'} onPress={() => handlePressNum('stack', 4)} />
        <Button title={'-'} onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button title={'3'} onPress={() => handlePressNum('stack', 3)} />
        <Button title={'2'} onPress={() => handlePressNum('stack', 2)} />
        <Button title={'1'} onPress={() => handlePressNum('stack', 1)} />
        <Button title={'+'} onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button title={'0'} onPress={() => handlePressNum('stack', 0)} />
        <Button title={'.'} onPress={() => {}} />
        <Button title={'ENTER'} onPress={() => {}} />
      </View>
    </View>
  </SafeAreaView>
  );
};

export default App;