import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppHeader from '../AppHeader';
import colors from '../../config/colors';

export default SectionHeading = ({ children }) => {
    return (
        <Text style={styles.heading}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 20
    }
})
