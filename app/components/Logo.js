import React from 'react';
import { Image, StyleSheet } from 'react-native';

import colors from '../config/colors';

export default function Logo() {
    return (
        <Image style={styles.logo} source={require('../assets/img/icon.png')} />
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 70,
        height: 70,
        borderWidth: 5,
        borderColor: colors.medium,
        borderRadius: 35
    }
})