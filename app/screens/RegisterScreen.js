import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
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
import ShowStep from '../components/register/ShowStep';
import colors from '../config/colors';
import RegisterResult from '../components/register/RegisterResult';
import { render } from 'react-dom';

const schemas = [NameStep.validationSchema, ContactPasswordStep.validationSchema, SchoolInfoStep1.validationSchema, SchoolInfoStep2.validationSchema];

export default function RegisterScreen({ navigation }) {
    const [step, setStep] = useState(0);
    const [userValues, setUserValues] = useState({});

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
        setUserValues(values);
        nextStep();
    }

    function renderRegisterForm() {
        const buttonRightStyle = step === 0? styles.buttonRightInit: styles.buttonRight
        return (
            <View style={styles.registerContainer}>
                <ShowStep currentStep={step + 1} lastStep={4} />
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
                                    {step !== 0 && <AppButton title="BACK" otherStyles={styles.button} onPress={() => prevStep()} />}
                                    <AppButton title="NEXT" otherStyles={[styles.button, buttonRightStyle]} onPress={handleSubmit} />
                                </View>

                            </>)
                    }

                </Formik>
                <AppLink text='Already have an account? Login' onPress={() => navigation.navigate('Login')} />
            </View>
        )
    }

    function renderRegResult() {
        return (
            <View style={styles.resultContainer}>
                <RegisterResult navigation={navigation} user={userValues} />
            </View>
        )
    }
    return (
        <Screen>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    {
                        step < 4 ? renderRegisterForm() : renderRegResult()
                    }
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    registerContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 10
    },
    resultContainer: {
        alignItems: "center",
        flex: 1,
        marginTop: 250,
        marginBottom: 120,
        position: "relative"
    },
    stepFragment: {
        marginTop: 5
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        marginTop: 5
    },
    button: {
        backgroundColor: colors.secondary,
        width: "25%",
        padding: 10
    },
    buttonRightInit: {
        marginLeft: "75%"
    },
    buttonRight: {
        marginLeft: "50%"
    },
  /*  headerLarge: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: "center"
    },*/

})