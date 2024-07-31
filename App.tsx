import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './src/components/atoms/Button';
import { RpnState } from './src/types/reduxTypes';
import { pressNum, pressClear, pressEnter, pressDot, pressOperation, toggleNegative } from './src/redux/counter/counterSlice';

const App = () => {
  const { stack, inputState } = useSelector((state: { rpn: RpnState }) => state.rpn.stack);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleNum = (stack: 'stack', value: number) => {
    if (!isNaN(value)) {
      dispatch(pressNum({ stack, value }));
    }
  };

  const handleDot = () => {
    dispatch(pressDot());
  };

  const handleOperation = (operation : string) => {
    dispatch(pressOperation({operation}));
  }

  const handleNegative = () => {
    dispatch(toggleNegative());
  }

  const handleClear = () => {
    dispatch(pressClear());
  };

  const handleEnter = () => {
    dispatch(pressEnter());
  };

  const baseNumber = {
    fontSize: 40,
    fontWeight: 'bold' as 'bold',
    textAlign: 'right' as 'right',
    marginBottom: 20,
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
      color: '#0A0A0A',
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
        <Text style={styles.append}>{stack[2] || 0}</Text>
        <Text style={styles.append}>{stack[1] || 0}</Text>
        <Text style={styles[inputState]}>{stack[0] || 0}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.row}>
          <Button title={'C'} onPress={handleClear} />
          <Button title={'pow'} onPress={() => handleOperation('pow')} />
          <Button title={'swap'} onPress={() => handleOperation('swap')} />
          <Button title={'/'} onPress={() => handleOperation('/')} special />
        </View>
        <View style={styles.row}>
          <Button title={'7'} onPress={() => handleNum('stack', 7)} />
          <Button title={'8'} onPress={() => handleNum('stack', 8)} />
          <Button title={'9'} onPress={() => handleNum('stack', 9)} />
          <Button title={'x'} onPress={() => handleOperation('x')} special />
        </View>
        <View style={styles.row}>
          <Button title={'4'} onPress={() => handleNum('stack', 4)} />
          <Button title={'5'} onPress={() => handleNum('stack', 5)} />
          <Button title={'6'} onPress={() => handleNum('stack', 6)} />
          <Button title={'-'} onPress={() => handleOperation('-')} special />
        </View>
        <View style={styles.row}>
          <Button title={'1'} onPress={() => handleNum('stack', 1)} />
          <Button title={'2'} onPress={() => handleNum('stack', 2)} />
          <Button title={'3'} onPress={() => handleNum('stack', 3)} />
          <Button title={'+'} onPress={() => handleOperation('+')} special />
        </View>
        <View style={styles.row}>
          <Button title={'0'} onPress={() => handleNum('stack', 0)} />
          <Button title={'.'} onPress={() => handleDot()} />
          <Button title={'='} onPress={handleEnter} special />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;