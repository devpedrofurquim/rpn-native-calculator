import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import { useDispatch, useSelector, UseSelector } from 'react-redux';
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
            <Button title={'clean'} onPress={() => {}}/>
            <Button title={'pow'} onPress={() => {}}/>
            <Button title={'swap'} onPress={() => {}}/>
            <Button title={'/'} onPress={() => {}}/>
          </View>
          <View style={styles.row}>
            <Button title={'9'} onPress={() => {}}/>
            <Button title={'8'} onPress={() => {}}/>
            <Button title={'7'} onPress={() => {}}/>
            <Button title={'x'} onPress={() => {}}/>
          </View>
          <View style={styles.row}>
            <Button title={'6'} onPress={() => {}}/>
            <Button title={'5'} onPress={() => {}}/>
            <Button title={'4'} onPress={() => {}}/>
            <Button title={'-'} onPress={() => {}}/>
          </View>
          <View style={styles.row}>
            <Button title={'3'} onPress={() => {}}/>
            <Button title={'2'} onPress={() => {}}/>
            <Button title={'1'} onPress={() => {}}/>
            <Button title={'+'} onPress={() => {}}/>
          </View>
          <View style={styles.row}>
            <Button title={'0'} onPress={() => {}}/>
            <Button title={'.'} onPress={() => {}}/>
            <Button title={'ENTER'} onPress={() => {}}/>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default App;