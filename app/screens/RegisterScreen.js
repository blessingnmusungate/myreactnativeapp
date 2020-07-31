import React from 'react';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormSubmitBtn } from '../components/form';
import AppLink from '../components/AppLink';
import LogoContainer from '../components/logo/LogoContainer';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape(
    {
        firstName: Yup.string().required().label('First Name'),
        lastName: Yup.string().required().label('Last Name'),
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().min(4).label('Password'),
        confirmPassword: Yup.string().required().label('Confirm Password').oneOf([Yup.ref('password'), null], 'Passwords must match')
    }
);
export default function RegisterScreen({ navigation }) {
    return (
        <Screen>
            <LogoContainer />
            <AppForm
                initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
                onSubmit={values => {
                    alert(`Hello ${values['firstName']} ${values['lastName']}, you can now login`);
                }}
                validationSchema={validationSchema}>
                <AppFormField
                    autoCorrect={false}
                    icon="account"
                    name="firstName"
                    placeholder="First Name"
                />
                <AppFormField
                    autoCorrect={false}
                    icon="account"
                    name="lastName"
                    placeholder="Last Name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email Address"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    name="password"
                    secureTextEntry={true}

                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                />
                <AppFormSubmitBtn title="Sign Up" />
            </AppForm>
            <AppLink text='Already have an account? Login' onPress={() => navigation.navigate('Login')} />
        </Screen>
    )
}
