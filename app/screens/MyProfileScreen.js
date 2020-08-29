import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import AppHeader from '../components/AppHeader';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

export default function MyProfileScreen({ route, navigation }) {
    const { user } = route.params;
  /*  const user = {
        firstName: "Blessing",
        middleName: "Ngonidzashe",
        lastName: "Musungate",
        personalAddress: "Buca",
        phoneNumber: "1234",
        email: "bnmusungate@gmail.com",
        password: "1234",
        universityName: "Dokuz Eylul University",
        universityAddress: "Buca",
        studentNumber: "111",
        facultyName: "Engineering",
        programName: "Computer Engineering",
        programStart: "2015",
        programEnd: "2019"
    }*/

    const data = [
        {
            title: "Name Information",
            fields: {
                "First Name": user.firstName,
                "Middle Name": user.middleName,
                "Last Name": user.lastName
            }
        },
        {
            title: "Contact Information",
            fields: {
                "Email": user.email,
                "Phone": user.phoneNumber,
                "Address": user.personalAddress
            }
        },
        {
            title: "School Details",
            fields: {
                "University Name": user.universityName,
                "University Address": user.universityAddress,
                "Student Number": user.studentNumber,
                "Faculty Name": user.facultyName,
                "Program Name": user.programName,
                "Program Start Year": user.programStart,
                "Program End Year": user.programEnd
            }
        },
    ]

    const renderSection = ({ item }) => {
        return (
            <View style={styles.sectionContainer}>
                <AppHeader otherStyles={styles.sectionTitle}>{item.title}</AppHeader>
                <View>
                    {
                        Object.keys(item.fields).map(key => {
                            return (
                                <View key={key} style={styles.fieldContainer}>
                                    <AppText otherStyles={styles.label}>{key}:</AppText>
                                    <AppText>{item.fields[key]}</AppText>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
    return (
        <Screen>
            <View style={styles.mainContainer}>
                <AppHeader otherStyles={styles.mainHeader}>My Profile</AppHeader>
                <FlatList
                    style={styles.flatList}
                    data={data}
                    renderItem={renderSection}
                    keyExtractor={section => section.title}
                />
                <AppButton title="Back" onPress={() => navigation.navigate('Home', {
                    user: user
                })} />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    mainHeader: {
        color: colors.gold,
    },
    flatList: {
        marginTop: 30,
        /* borderColor: "yellow",
         borderWidth: 5*/
    },
    label: {
        fontWeight: "bold"
    },
    fieldContainer: {
        flexDirection: "row",
    },
    sectionTitle: {
        color: colors.primary
    },
    sectionContainer: {
        marginBottom: 10,
        backgroundColor: colors.light
    }

})