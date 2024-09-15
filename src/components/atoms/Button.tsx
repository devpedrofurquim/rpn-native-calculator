import { TouchableOpacity, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');


interface ButtonProps {
    title: string,
    onPress: () => void;
    special?: boolean;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.17,
      height: width * 0.17,
      borderRadius: 10,
      margin: width * 0.02,
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: '500',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    baseContainer: {
        backgroundColor: '#0A0A0A',
    },
    specialContainer: {
        backgroundColor: '#FF9500',
    },
    baseTitle: {
        color: '#FFF',
    },
    specialTitle: {
        color: '#FFF',
    }
});

const Button = ({ title, onPress, special }: ButtonProps) => {
    const handlePress = () => {
        onPress()
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, special ? styles.specialContainer : styles.baseContainer,]}
            onPress={handlePress}
        >
            <Text  style={[styles.title, special ? styles.specialTitle : styles.baseTitle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button