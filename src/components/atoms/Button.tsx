import { TouchableOpacity , Text, StyleSheet } from 'react-native'
import React from 'react'

interface buttonProps {
    title: string,
    onPress: () => void;
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#FAFAFA',
        backgroundColor: '#0A0A0A',
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        borderRadius: 15
        
    }
});

const Button = ({title, onPress} : buttonProps) => {
  return (
    <TouchableOpacity activeOpacity={.7} style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity >
  )
}

export default Button