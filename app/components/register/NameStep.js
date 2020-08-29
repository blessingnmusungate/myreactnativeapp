import React from 'react';
import * as Yup from 'yup';

import { AppFormField } from '../form';
import AppHeader from '../AppHeader';
import SectionHeading from './SectionHeading';
import { Text } from 'react-native';
import AppText from '../AppText';

const NameStepComponent = () => {
    return (
        <>
            <SectionHeading>Name Information</SectionHeading>
            <AppFormField
                autoCorrect={false}
                name="firstName"
                label="First Name"
            />
            <AppFormField
                autoCorrect={false}
                name="middleName"
                label="Middle Name"
            />
            <AppFormField
                autoCorrect={false}
                name="lastName"
                label="Last Name"
            />

        </>
    )
}

const NameStep = {
    component: NameStepComponent,
    validationSchema: {
        firstName: Yup.string().required().label('First Name'),
        lastName: Yup.string().required().label('Last Name')
    },
    initialValues: {
        firstName: "",
        middleName: "",
        lastName: ""
    }
}

export default NameStep