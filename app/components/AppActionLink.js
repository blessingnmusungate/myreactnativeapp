import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

export default function AppActionLink({ text, icon, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.white} style={styles.icon} />}
            <AppText otherStyles={styles.text}>{text}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
        backgroundColor: colors.primary,
        borderRadius: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        color: colors.white
    }
})