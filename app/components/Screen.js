import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

export default function Screen({ children }) {
    return (
        <View style={styles.screen}>
            {children}
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
    }
})