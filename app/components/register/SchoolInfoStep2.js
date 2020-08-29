import React from 'react';
import * as Yup from 'yup';

import { AppFormField } from '../form';
import SectionHeading from './SectionHeading';

const SchoolInfo2Component = (props) => {
    return (
        <>
            <SectionHeading>University Information (ii)</SectionHeading>
            <AppFormField
                name="facultyName"
                label="Faculty Name"

            />
            <AppFormField
                name="programName"
                label="Program Name"

            />
            <AppFormField
                name="programStart"
                label="Program Start Date"

            />
            <AppFormField
                name="programEnd"
                label="Program End Date"

            />

        </>
    )

}

const SchoolInfoStep2 = {
    component: SchoolInfo2Component,
    validationSchema: {
        facultyName: Yup.string().required().label('Faculty Name'),
        programName: Yup.string().required().label('Program Name'),
        programStart: Yup.string().required().label('Program Start Date'),
        programEnd: Yup.string().required().label('Program End Date'),
    },
    initialValues: {
        facultyName: "",
        programName: "",
        programStart: "",
        programEnd: ""
    }
}

export default SchoolInfoStep2;