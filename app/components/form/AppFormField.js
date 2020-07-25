import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

export default function AppFormField({ name, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
    return (
        <View style={styles.field}>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                otherStyles={styles.textInputContainer}
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
        padding: 5
    },
    textInputContainer: {
        marginVertical: 0
    }
})