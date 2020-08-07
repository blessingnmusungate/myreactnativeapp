import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import colors from '../config/colors';

export default function Screen({ children }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" />
            <View style={styles.screen}>
                {children}
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})