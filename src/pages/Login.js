import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import logo from '../assets/imgs/logo2.png'
import { connect } from 'react-redux'
import { changeEmail, changePassword } from '../actions/AuthAction'


class Login extends React.Component {

    state = {
        user: ''
    }

    login() {
        this.props.navigation.navigate('TabNav')
    }

    pageNewUser(){
        this.props.navigation.navigate('NewUser')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <TextInput value={this.props.email} style={styles.input} placeholder='Digite seu email'
                    placeholderTextColor='#A0A0A0' keyboardType='email-address'
                    onChangeText={value => this.props.changeEmail(value)} />
                <TextInput style={styles.input} placeholder='Digite sua senha'
                    placeholderTextColor='#A0A0A0' secureTextEntry={true}
                    onChangeText={value => this.props.changePassword(value)} />
                <TouchableOpacity style={styles.buttom} onPress={() => this.login()}>
                    <Text style={styles.buttomText}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.newUser}>
                    <Text style={styles.newUserText}>Novo usuário?</Text>
                    <TouchableOpacity onPress={() => this.pageNewUser()}>
                        <Text style={styles.newUserButtom}>Acesse aqui</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
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

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password
    }
)

export default connect(mapStateToProps, { changeEmail, changePassword })(Login)