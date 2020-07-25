import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../AppText';

export default function AppErrorMessage({ error, visible }) {
    if (!visible || !error) return null;

    return <AppText otherStyles={styles.error}>{error}</AppText>
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
    }
})