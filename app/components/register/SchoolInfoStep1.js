import React from 'react';
import * as Yup from 'yup';

import { AppFormField } from '../form';
import AppHeader from '../AppHeader';

const SchoolInfo1Component = (props) => {
    return (
        <>
            <AppHeader>School Information (1)</AppHeader>
            <AppFormField
                name="universityName"
                label="University Name"

            />
            <AppFormField
                name="universityAddress"
                label="University Address"

            />
            <AppFormField
                name="studentNumber"
                label="Student Number"

            />

        </>
    )

}

const SchoolInfoStep1 = {
    component: SchoolInfo1Component,
    validationSchema: {
        universityName: Yup.string().required().label('University Name'),
        universityAddress: Yup.string().required().label('University Address'),
        studentNumber: Yup.string().required().label('Student Number')
    },
    initialValues: {
        universityName: "",
        universityAddress: "",
        studentNumber: ""
    }
}

export default SchoolInfoStep1;