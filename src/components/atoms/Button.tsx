import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

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
      width: 75,
      height: 75,
      borderRadius: 37.5,
      margin: 10,
    },
    title: {
        fontSize: 25,
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
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, special ? styles.specialContainer : styles.baseContainer]}
            onPress={onPress}
        >
            <Text style={[styles.title, special ? styles.specialTitle : styles.baseTitle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;
