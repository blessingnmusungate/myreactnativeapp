import React from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-simple-toast';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import AppActionLink from '../components/AppActionLink';
import colors from '../config/colors';

export default function HomeScreen({ route, navigation }) {
    const { email } = route.params;

    return (
        <Screen>
            <AppText otherStyles={styles.header}>Welcome user!</AppText>
            <AppText>Your email address is {email}</AppText>
            <View style={styles.actionList}>
                <AppActionLink text='Transactions' icon='bank-transfer' onPress={() => Toast.show('Transations option pressed')} />
                <AppActionLink text='Useful Information' icon='information' onPress={() => Toast.show('Information option pressed')} />
                <AppActionLink text='News' icon='newspaper' onPress={() => Toast.show('News option pressed')} />
                <AppActionLink text='My Profile' icon='account' onPress={() => Toast.show('My Profile option pressed')} />
            </View>
            <AppButton title='Logout' color='secondary' onPress={() => navigation.navigate('Login')} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    actionList: {
        marginVertical: 10,
        backgroundColor: colors.light,
        padding: 5,
        width: '100%'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 22
    }
})