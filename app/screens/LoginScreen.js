import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import AppText from '../components/AppText';
import { AppForm, AppFormField, AppFormSubmitBtn } from '../components/form';
import AppButton from '../components/AppButton';
import AppLink from '../components/AppLink';
import LogoContainer from '../components/logo/LogoContainer';
import Screen from '../components/Screen';
import colors from '../config/colors';

const validationSchema = Yup.object().shape(
    {
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().label('Password')
    }
);

export default function LoginScreen({ route, navigation }) {
    function handleLogin(values) {
        const { user } = route.params;
        if (values.email === user.email && values.password === user.password) {
            navigation.navigate('Home', {
                user: user
            });
        }
        else {
            alert('You have entered an invalid email address or password')
        }
    }

    return (
        <Screen>
            <View style={styles.loginContainer}>
                <LogoContainer />
                <AppForm
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => handleLogin(values)}
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
                <AppButton title='Create an Account' otherStyles={styles.secondaryBtn} onPress={() => navigation.navigate('Register')} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        width: '100%',
        marginTop: 50
    },
    secondaryBtn: {
        backgroundColor: colors.secondary,
    }
})
