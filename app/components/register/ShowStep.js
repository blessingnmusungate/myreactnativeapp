import React from 'react';
import { StyleSheet } from 'react-native';
import AppHeader from '../AppHeader';
import colors from '../../config/colors';

export default ShowStep = ({ currentStep, lastStep }) => {
    return (
        <AppHeader otherStyles={styles.showStep}>Step {currentStep} of {lastStep}</AppHeader>
    )
}

const styles = StyleSheet.create({
    showStep: {
        color: colors.gold,
        fontSize: 22.5,
        marginBottom: 5
    }
})
