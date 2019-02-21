import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux'
import { changeEmail, changePassword, changeName, insertUser } from '../actions/AuthAction'



class NewUser extends React.Component {

    _insertUser(){
       const { name, email, password } = this.props
       this.props.insertUser({ name, email, password })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Nome completo'
                    placeholderTextColor='#A0A0A0' keyboardType='email-address' 
                    onChangeText={value => this.props.changeName(value)} />
                <TextInput style={styles.input} placeholder='Seu email'
                    placeholderTextColor='#A0A0A0' keyboardType='email-address' 
                    onChangeText={value => this.props.changeEmail(value)}/>
                <TextInput style={styles.input} placeholder='Senha a ser usada'
                    placeholderTextColor='#A0A0A0' secureTextEntry={true} 
                    onChangeText={value => this.props.changePassword(value)}/>
                <Text style={styles.error}>{this.props.errorAddUser}</Text>
                <TouchableOpacity style={styles.buttom} onPress={() => this._insertUser()} >
                    <Text style={styles.buttomText}>Cadastrar</Text>
                </TouchableOpacity>
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
    error: {
        color: '#ff0000',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    }
})


const mapStateToProps = state => (
    {
        name: state.AuthReducer.name,
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        errorAddUser: state.AuthReducer.errorAddUser
     }
)

export default connect(mapStateToProps, {changeEmail, changePassword, changeName, insertUser})(NewUser)