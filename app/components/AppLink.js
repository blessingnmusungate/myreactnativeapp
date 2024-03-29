import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

export default function AppLink({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText otherStyles={styles.link}>{text}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: colors.gold,
    }
})