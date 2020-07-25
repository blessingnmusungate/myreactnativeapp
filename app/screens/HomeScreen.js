import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

export default function HomeScreen({ route, navigation }) {
    const { email } = route.params;

    return (
        <Screen>
            <AppText otherStyles={styles.header}>Welcome user!</AppText>
            <AppText>Your email address is {email}</AppText>
            <AppButton title='Logout' color='secondary' onPress={() => navigation.navigate('Login')} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 22
    }
})