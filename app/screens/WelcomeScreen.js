import React from 'react';
import { ImageBackground, StyleSheet, Image, View } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            blurRadius={1}
            source={require('../assets/light-blue-background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.jpg')} />
                <AppText>AppName</AppText>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='Login' onPress={() => navigation.navigate('Login')} />
                <AppButton title='Register' color='secondary' onPress={() => navigation.navigate('Register')} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        width: '100%',
        padding: 20,
        bottom: 10
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    logoContainer: {
        position: 'absolute',
        top: 90,
        justifyContent: 'center',
        alignItems: 'center'
    }

})