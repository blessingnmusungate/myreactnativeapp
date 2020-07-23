import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.loginContainer}>
            <AppText otherStyles={styles.header}>Log in</AppText>
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Email address"
                icon="email"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                placeholder="Password"
                icon="lock"
            />
            <AppButton title="Login" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    header: {
        fontWeight: "bold",
        fontSize: 22,
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
    }
});