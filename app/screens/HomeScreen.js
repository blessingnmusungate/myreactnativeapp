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
            <View style={styles.container}>
                <AppText otherStyles={styles.header}>Welcome {user.firstName}!</AppText>
                <View style={styles.actionList}>
                    <AppActionLink text='Transactions' icon='arrow-up-down-bold' onPress={() => alert('Transations option pressed')} />
                    <AppActionLink text='Useful Information' icon='information' onPress={() => alert('Information option pressed')} />
                    <AppActionLink text='My Profile' icon='account' onPress={() => navigation.navigate('Profile', {
                        user: user
                    })} />
                </View>
                <AppButton title='Logout' otherStyles={styles.logoutBtn} onPress={() => navigation.navigate('Login')} />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    actionList: {
        width: '100%'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 25,
        width: "100%"
    },
    header: {
        color: colors.gold,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: "center",
        marginBottom: 50
    },
    logoutBtn: {
        backgroundColor: colors.gold,
        borderRadius: 15,
        marginTop: 50,
        padding: 10
    }
})