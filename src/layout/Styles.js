import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

export const styleApp = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#F0FFFF'
    },
})


export const styleLogin = StyleSheet.create({
    container: {
        backgroundColor: '#2c3e50',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },

    // input: {
    //     height: 40,
    //     backgroundColor: 'rgba(225,225,225,0.2)',
    //     marginBottom: 10,
    //     padding: 10,
    //     color: '#fff',
    //     margin: 20,
    //     borderRadius: 15,
    // },
    input2: {
        marginHorizontal: 20,
        marginBottom: 10, 
        borderRadius: 15, 
        marginTop: 20,
        alignSelf: 'center',
        width: Dimensions.get('window').width * 3 / 4,
        backgroundColor: 'rgba(225,225,225,0.2)',
    },
    buttom: {
        backgroundColor: '#2980b6',
        margin: 30,
        height: 45,
        width: Dimensions.get('window').width * 3 / 4,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttomText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    logo: {
        width: Dimensions.get('window').width * 3 / 4,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    newUser: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    newUserText: {
        //fontWeight: 'bold'
    },
    newUserButtom: {
        fontWeight: 'bold',
        marginLeft: 5,
    }
})


export const styleExam = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: Dimensions.get('window').width * 3 / 4,
        height: 150,
        shadowOffset: { width: 3, height: 3, },
        shadowColor: '#808080',
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 1,
    },
    containereElement: {
        marginTop: 15,
        marginLeft: 15,
    },
    viewPatientTitleRow: {
        flexDirection: 'row', 
        marginTop: 10, 
        justifyContent: 'space-between'
    },
    patient: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    type: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#48D1CC',
        alignSelf: 'center',
    },
    rowElement: {
        flexDirection: 'row',
        marginTop: 15
    }
})


export const styleSearch = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },
    input: {
        width: '90%'
    }
})


export const styleNewUser = StyleSheet.create({
    container: {
        backgroundColor: '#2c3e50',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        margin: 20,
        borderRadius: 15,
    },
    buttom: {
        backgroundColor: '#2980b6',
        margin: 30,
        height: 45,
        width: Dimensions.get('window').width * 3 / 4,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttomText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    error: {
        color: '#ff0000',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    }
})


export const styleProfile = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B0E0E6'
    },
})


export const styleListExams = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#48D1CC',
    },
    input: {
        backgroundColor: '#2c3e50',
        height: 40
    },
    search: {
        backgroundColor: 'transparent',
        marginTop: 50,
        width: '87%'
    },
    inputSearch: {
        backgroundColor: '#B0E0E6',
    },
    list: {
        flex: 2,
        alignItems: 'center',
        marginTop: 10,
    },
    calendar: {
        flex: 3,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    buttonSearch: {
        backgroundColor: '#B0E0E6',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 30,
        borderRadius: 15,
        marginTop: 25
    },
    textButtomSearch: {
        fontWeight: 'bold'
    },
    clearIcon: {
        color: '#5F9EA0'
    },
    containerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttomClear: {
        backgroundColor: '#B0E0E6',
        width: 40,
        height: 30,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: '#A9A9A9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginLeft: 20,
    }
})

export const stylePatient = StyleSheet.create({
    containerTitle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#48D1CC'
    },
    textPatientTitle: {
        marginTop: 20,
        marginLeft: 15,
        alignItems: 'center',
    },
    containerInfoPatient: {
        width: '100%',
        //height: Dimensions.get('window').width * 3 / 4,
        height: 230,
        marginTop: 15,
        backgroundColor: '#F5FFFA',
        borderWidth: 0.5,
        borderColor: '#C0C0C0',
    },
    containerInfoExam: {
        width: '100%',
        //height: Dimensions.get('window').width * 3 / 4,
        height: 290,
        marginTop: 15,
        backgroundColor: '#F5FFFA',
        borderWidth: 0.5,
        borderColor: '#C0C0C0',
    },
    infoPatient: {
        margin: 10,
    },
    divider: { 
        backgroundColor: '#C0C0C0', 
        width: '90%', 
        alignSelf: 'center'
    }
})

export const styleAddExam = StyleSheet.create({
    containerTitle: {
        flex: 1,
        backgroundColor: '#48D1CC'
    },
    textPatientTitle: {
        marginTop: 20,
        marginLeft: 15,
        alignItems: 'center',
    },
    containerInfoPatient: {
        width: '100%',
        height: 350,
        // height: Dimensions.get('window').height * 2 / 4,
        marginTop: 15,
        backgroundColor: '#F5FFFA',
        borderWidth: 0.5,
        borderColor: '#C0C0C0',
    },
    infoPatient: {
        margin: 10,
    },
    inputContainerName: {
        borderBottomWidth: 0, 
        backgroundColor: '#FDF5E6', 
        width: Dimensions.get('window').width * 3 / 4,
        borderRadius: 10
    },
    inputOld: {
        borderBottomWidth: 0, 
        width: 50,
        backgroundColor: '#FDF5E6', 
        borderRadius: 10,
    },
    inputPhone: {
        width: Dimensions.get('window').width * 2 / 4,
        borderBottomWidth: 0, 
        backgroundColor: '#FDF5E6', 
        borderRadius: 10,
    },
    inputAdress: {
        width: 250,
        borderBottomWidth: 0,
        backgroundColor: '#FDF5E6', 
        borderRadius: 10
    },
    containerInfoExam: {
        width: '100%',
        //height: Dimensions.get('window').width * 3 / 4,
        // height: 290,
        marginTop: 15,
        backgroundColor: '#F5FFFA',
        borderWidth: 0.5,
        borderColor: '#C0C0C0',
    },
    checkboxAgreement: {
        backgroundColor: 'transparent', 
        borderWidth: 0, 
        marginLeft: 0, 
        marginTop: 10
    },
    inputObs: {
        borderBottomWidth: 0, 
        backgroundColor: '#FDF5E6',
        width: 240,
        borderRadius: 10
    },
    buttomConfirm: {
        backgroundColor: '#2980b6',
        marginTop: 30,
        marginLeft: 10,
        marginBottom: 15,
        height: 45,
        width: Dimensions.get('window').width * 2 / 4,
        justifyContent: 'center',
        borderRadius: 20
    },
    buttomText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    buttomCancel: {
        backgroundColor: '#FF4500',
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 15,
        height: 45,
        width: Dimensions.get('window').width * 1 / 4,
        justifyContent: 'center',
        borderRadius: 20
    },
    overlay: {
        height: Dimensions.get('window').height * 2 / 4,
        width: '95%'
    }

})