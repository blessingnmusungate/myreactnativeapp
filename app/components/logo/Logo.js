import React from 'react';
import { Image, StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default function Logo() {
    return (
        <Image style={styles.logo} source={require('../../assets/img/logo.png')} />
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        borderWidth: 2.5,
        borderColor: colors.medium,
        borderRadius: 40
    }
})