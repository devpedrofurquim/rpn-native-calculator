import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './src/components/atoms/Button';
import { RpnState } from './src/types/reduxTypes';
import { pressNum, clear, enter } from './src/redux/counter/counterSlice';

const App = () => {
  const { stack, inputState } = useSelector((state: { rpn: RpnState }) => state.rpn.stack);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handlePressNum = (stack: 'stack', value: number) => {
    if (!isNaN(value)) {
      dispatch(pressNum({ stack, value }));
    }
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const handleEnter = () => {
    dispatch(enter());
  };

  const baseNumber = {
    backgroundColor: '#000',
    textAlign: 'right' as 'right',
    borderWidth: 2,
    borderColor: '#0A0A0A',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold' as 'bold',
    borderRadius: 5,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      padding: 10,
    },
    topContainer: {
      padding: 10,
      backgroundColor: '#FAFAFA',
    },
    displayText: {
      color: '#0A0A0A',
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'right',
      marginBottom: 20,
    },
    bottomContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    append: {
      ...baseNumber,
      color: '#FFF',
    },
    replace: {
      ...baseNumber,
      color: '#FF9500',
    },
    push: {
      ...baseNumber,
      color: '#FF9500',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.displayText}>{stack[2] || 0}</Text>
        <Text style={styles.displayText}>{stack[1] || 0}</Text>
        <Text style={styles.displayText}>{stack[0] || 0}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.row}>
          <Button title={'C'} onPress={handleClear} />
          <Button title={'pow'} onPress={() => {}} />
          <Button title={'swap'} onPress={() => {}} />
          <Button title={'/'} onPress={() => {}} special />
        </View>
        <View style={styles.row}>
          <Button title={'7'} onPress={() => handlePressNum('stack', 7)} />
          <Button title={'8'} onPress={() => handlePressNum('stack', 8)} />
          <Button title={'9'} onPress={() => handlePressNum('stack', 9)} />
          <Button title={'x'} onPress={() => {}} special />
        </View>
        <View style={styles.row}>
          <Button title={'4'} onPress={() => handlePressNum('stack', 4)} />
          <Button title={'5'} onPress={() => handlePressNum('stack', 5)} />
          <Button title={'6'} onPress={() => handlePressNum('stack', 6)} />
          <Button title={'-'} onPress={() => {}} special />
        </View>
        <View style={styles.row}>
          <Button title={'1'} onPress={() => handlePressNum('stack', 1)} />
          <Button title={'2'} onPress={() => handlePressNum('stack', 2)} />
          <Button title={'3'} onPress={() => handlePressNum('stack', 3)} />
          <Button title={'+'} onPress={() => {}} special />
        </View>
        <View style={styles.row}>
          <Button title={'0'} onPress={() => handlePressNum('stack', 0)} />
          <Button title={'.'} onPress={() => {}} />
          <Button title={'='} onPress={handleEnter} special />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
