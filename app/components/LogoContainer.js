import React from 'react';
import { StyleSheet, View } from 'react-native';

import Logo from './Logo';
import AppText from './AppText';

export default function LogoContainer() {
    return (
        <View style={styles.logoContainer}>
            <Logo />
            <AppText>Varsity App</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center'
    }
})