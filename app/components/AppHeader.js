import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText';

export default function AppHeader({ children, large }) {
    return (
        <AppText otherStyles={large ? styles.headerLarge : styles.headerNormal}>{children}</AppText>
    )
}

const styles = StyleSheet.create({
    headerNormal: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerLarge: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    }
})