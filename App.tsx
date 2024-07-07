import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import { useDispatch, useSelector, UseSelector } from 'react-redux';
import { decrement, increment } from './src/redux/counter/counterSlice';
import Button from './src/components/atoms/Button';

const App = () => {
  // Read Data from store
  const count = useSelector((state: any) => state.counter.value)
  // Change the data by sending action to store
  const dispatch = useDispatch()

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
          <Text style={styles.number}>3</Text>
          <Text style={styles.number}>2</Text>
          <Text style={styles.number}>1</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.row}>
            <Button title={'clean'}/>
            <Button title={'pow'}/>
            <Button title={'swap'}/>
            <Button title={'/'}/>
          </View>
          <View style={styles.row}>
            <Button title={'9'}/>
            <Button title={'8'}/>
            <Button title={'7'}/>
            <Button title={'x'}/>
          </View>
          <View style={styles.row}>
            <Button title={'6'}/>
            <Button title={'5'}/>
            <Button title={'4'}/>
            <Button title={'-'}/>
          </View>
          <View style={styles.row}>
            <Button title={'3'}/>
            <Button title={'2'}/>
            <Button title={'1'}/>
            <Button title={'+'}/>
          </View>
          <View style={styles.row}>
            <Button title={'0'}/>
            <Button title={'.'}/>
            <Button title={'ENTER'}/>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default App;