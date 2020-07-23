import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <AppText style={styles.header}>Welcome back!</AppText>
            <AppButton title='Logout' color='secondary' onPress={() => navigation.navigate('Login')}>Log out</AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    header: {
        fontWeight: "bold",
        fontSize: 22,
    },
})