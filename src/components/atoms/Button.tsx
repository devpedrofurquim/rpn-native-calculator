import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window'); // Get the screen width


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
      width: width * 0.17,  // 20% of screen width
      height: width * 0.17, // 20% of screen width, making the button square
      borderRadius: 10,
      margin: width * 0.02, // 2% of screen width as margin
    },
    title: {
        fontSize: width * 0.06, // 6% of screen width
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
