import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import AppActionLink from '../components/AppActionLink';
import colors from '../config/colors';

export default function HomeScreen({ route, navigation }) {
    const { user } = route.params;

    return (
        <Screen>
            <AppText otherStyles={styles.header}>Welcome {user.firstName} {user.lastName}!</AppText>
            <View style={styles.actionList}>
                <AppActionLink text='Transactions' icon='bank-transfer' onPress={() => alert('Transations option pressed')} />
                <AppActionLink text='Useful Information' icon='information' onPress={() => alert('Information option pressed')} />
                <AppActionLink text='News' icon='newspaper' onPress={() => alert('News option pressed')} />
                <AppActionLink text='My Profile' icon='account' onPress={() => navigation.navigate('Profile', {
                    user: user
                })} />
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