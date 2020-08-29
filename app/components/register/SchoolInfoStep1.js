import React from 'react';
import * as Yup from 'yup';

import { AppFormField } from '../form';
import AppHeader from '../AppHeader';
import SectionHeading from './SectionHeading';

const SchoolInfo1Component = (props) => {
    return (
        <>
            <SectionHeading>University Information (i)</SectionHeading>
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
            <AppFormField
                name="documents"
                label="Support Documents (*to be done)"

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