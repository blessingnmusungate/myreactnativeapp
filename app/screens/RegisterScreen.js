import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import NameStep from '../components/register/NameStep';
import ContactPasswordStep from '../components/register/ContactPasswordStep';
import SchoolInfoStep1 from '../components/register/SchoolInfoStep1';
import SchoolInfoStep2 from '../components/register/SchoolInfoStep2';
import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import AppLink from '../components/AppLink';
import Screen from '../components/Screen';

const schemas = [NameStep.validationSchema, ContactPasswordStep.validationSchema, SchoolInfoStep1.validationSchema, SchoolInfoStep2.validationSchema];

export default function RegisterScreen({ navigation }) {
    const [step, setStep] = useState(0);

    const initialValTemp1 = { ...NameStep.initialValues, ...ContactPasswordStep.initialValues };
    const initialValTemp2 = { ...SchoolInfoStep1.initialValues, ...SchoolInfoStep2.initialValues };
    const initialVals = { ...initialValTemp1, ...initialValTemp2 };
    const arrayInit = [NameStep.initialValues, ContactPasswordStep.initialValues, SchoolInfoStep1.initialValues, SchoolInfoStep2.initialValues]
    function prevStep() {
        setStep(step => step - 1);
    }
    function nextStep() {
        setStep(step => step + 1)
    }

    function renderStep() {
        switch (step) {
            case 0: return <NameStep.component />
            case 1: return <ContactPasswordStep.component />
            case 2: return <SchoolInfoStep1.component />
            case 3: return <SchoolInfoStep2.component />
        }
    }

    function handleSubmittedForm(values) {
        alert(`Hello ${values['firstName']} ${values['lastName']}, you can now login`);
        navigation.navigate('Login', { user: values });
    }

    return (
        <Screen>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={styles.container}>
                    <AppHeader large={true}>Create an Account</AppHeader>
                    <AppHeader>Step {step + 1} of 4</AppHeader>
                    <Formik
                        initialValues={initialVals}
                        onSubmit={(values, { setFieldTouched }) => {
                            if (step === 3)
                                handleSubmittedForm(values);
                            else {
                                Object.keys(arrayInit[step + 1]).map(key => setFieldTouched(key, false, false))
                                nextStep();
                            }
                        }}
                        validationSchema={Yup.object().shape(schemas[step])}>
                        {
                            ({ handleSubmit }) => (
                                <>
                                    <View style={styles.stepFragment}>
                                        {renderStep()}
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        {step !== 0 && <AppButton title="Back" otherStyles={styles.buttonLeft} onPress={() => prevStep()} />}
                                        <AppButton title={step == 3 ? "Sign Up" : "Next"} otherStyles={styles.buttonRight} onPress={handleSubmit} />
                                    </View>
                                    <AppLink text='Already have an account? Login' onPress={() => navigation.navigate('Login')} />
                                </>)
                        }

                    </Formik>
                </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    stepFragment: {
        padding: 10
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%"
    },
    buttonLeft: {
        width: "35%"
    },
    buttonRight: {
        width: "35%",
        marginLeft: "25%"
    }


})