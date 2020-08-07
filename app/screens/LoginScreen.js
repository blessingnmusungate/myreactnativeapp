import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import AppText from '../components/AppText';
import { AppForm, AppFormField, AppFormSubmitBtn } from '../components/form';
import AppButton from '../components/AppButton';
import AppLink from '../components/AppLink';
import LogoContainer from '../components/logo/LogoContainer';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape(
    {
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().label('Password')
    }
);

export default function LoginScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.loginContainer}>
                <LogoContainer />
                <AppForm
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => navigation.navigate('Home', {
                        email: values["email"]
                    })}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email address"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <AppFormSubmitBtn title="Login" />
                </AppForm>
                <AppLink text='Forgot password?' onPress={() => alert('Forgot password clicked')} />
                <AppText>OR</AppText>
                <AppButton title='Create an Account' color='secondary' onPress={() => navigation.navigate('Register')} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        width: '100%',
        marginTop: 50
    }
})
