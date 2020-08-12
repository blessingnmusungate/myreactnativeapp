import React from 'react';
import * as Yup from 'yup';

import { AppFormField } from '../form';
import AppHeader from '../AppHeader';

const ContactPasswordComponent = () => {
    return (
        <>
            <AppHeader>Contact Info and Password</AppHeader>
            <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                name="personalAddress"
                label="Residential Address"
            />
            <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="phone-pad"
                name="phoneNumber"
                label="Phone Number"
            />
            <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                label="Email Address"
            />

            <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                name="password"
                secureTextEntry={true}

            />
            <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                name="confirmPassword"
                label="Confirm Password"
                secureTextEntry={true}
            />

        </>
    )
}

const ContactPasswordStep = {
    component: ContactPasswordComponent,
    validationSchema: {
        personalAddress: Yup.string().required().label('Address'),
        phoneNumber: Yup.string().required().label('Phone Number'),
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().min(4).label('Password'),
        confirmPassword: Yup.string().required().label('Confirm Password').oneOf([Yup.ref('password'), null], 'Passwords must match')
    },
    initialValues: {
        personalAddress: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
}

export default ContactPasswordStep;