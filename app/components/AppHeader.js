import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText';

export default function AppHeader({ children, otherStyles }) {
    return (
        <AppText otherStyles={[styles.header, otherStyles]}>{children}</AppText>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})