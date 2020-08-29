import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

export default function AppFormField({ name, label, ...otherProps }) {
    let { setFieldTouched, handleChange, errors, touched, values } = useFormikContext()

    return (
        <View style={styles.field}>
            {label && <Text>{label}</Text>}
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                otherStyles={styles.textInputContainer}
                value={values[name]}
                {...otherProps}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        justifyContent: 'flex-start',
        width: '100%',
        padding: 5,
        paddingHorizontal: 0
    },
    textInputContainer: {
        marginVertical: 0
    }
})