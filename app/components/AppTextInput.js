import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors';

export default function AppTextInput({ icon, otherStyles = null, ...otherProps }) {
    return (
        <View style={[styles.container, otherStyles]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 12,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        color: colors.dark,
        height: 20,
        width: '100%',
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})