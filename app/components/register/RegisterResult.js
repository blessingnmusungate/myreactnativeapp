import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppHeader from '../AppHeader';
import AppButton from '../AppButton';
import colors from '../../config/colors';

export default function RegisterResult({ navigation, user }) {
    function gotToLogin() {
        navigation.navigate('Login', { user: user });
    }
    return (
        <>
            <AppHeader otherStyles={styles.header}>Your Profile Is Ready</AppHeader>
            <AppButton title="Login" otherStyles={styles.loginButton} onPress={() => gotToLogin()} />
        </>
    )

}

const styles = StyleSheet.create({
    header: {
        color: colors.secondary,
        fontSize: 40,
        textAlign: 'center'
    },
    loginButton: {
        backgroundColor: colors.gold,
        padding: 10,
        position: "absolute",
        bottom: 0,
        width: '50%',
    }
})