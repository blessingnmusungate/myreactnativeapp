import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

export default function AppButton({ title, otherStyles, onPress, disabled }) {
    return (
        <TouchableOpacity style={[styles.button, otherStyles]} onPress={onPress} disabled={disabled} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    }
})