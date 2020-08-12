import React from 'react';
import * as Yup from 'yup';

import { AppFormField } from '../form';
import AppHeader from '../AppHeader';

const NameStepComponent = () => {
    return (
        <>
            <AppHeader>Name Information</AppHeader>
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