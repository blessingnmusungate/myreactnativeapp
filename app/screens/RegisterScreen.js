import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';


export default function RegisterScreen({ navigation }) {
    return (
        <View style={styles.registerContainer}>
            <AppText otherStyles={styles.header}>Create an Account</AppText>
            <AppTextInput
                autoCorrect={false}
                placeholder="First Name"
            />
            <AppTextInput
                autoCorrect={false}
                placeholder="Last Name"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Email address"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                placeholder="Password"
            />
            <AppButton title="Sign Up" onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        fontSize: 22,
    },
    registerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    }
})