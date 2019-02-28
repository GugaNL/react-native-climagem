import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import {styleLogin} from '../layout/Styles'
import logo from '../assets/imgs/logo2.png'
import { connect } from 'react-redux'
import { changeEmail, changePassword } from '../store/actions/AuthAction'


class Login extends React.Component {

    login() {
        this.props.navigation.navigate('TabNav')
    }

    pageNewUser(){
        this.props.navigation.navigate('NewUser')
    }

    render() {
        return (
            <View style={styleLogin.container}>
                <Image source={logo} style={styleLogin.logo} />

                <Input underlineColorAndroid='transparent' containerStyle={styleLogin.input2} 
                inputContainerStyle={{borderBottomWidth: 0}} inputStyle={{marginLeft: 10, color: '#fff'}} 
                placeholder='Usuário' leftIcon={<Icon name='user' size={24} color='#C0C0C0'/>}
                placeholderTextColor='#C0C0C0'
                onChangeText={value => this.props.changeEmail(value)}
                />
                
                <Input secureTextEntry={true} underlineColorAndroid='transparent' containerStyle={styleLogin.input2} 
                inputContainerStyle={{borderBottomWidth: 0}} inputStyle={{marginLeft: 10}} placeholder='Senha de acesso' 
                leftIcon={<Icon name='lock' size={24} color='#C0C0C0'/>}
                placeholderTextColor='#C0C0C0'
                onChangeText={value => this.props.changePassword(value)}
                />

  
                {/* {<TextInput value={this.props.email} style={styleLogin.input} placeholder='Digite seu email'
                    placeholderTextColor='#A0A0A0' keyboardType='email-address'
                    onChangeText={value => this.props.changeEmail(value)} />} */}


                {/* {<TextInput style={styleLogin.input} placeholder='Digite sua senha'
                    placeholderTextColor='#A0A0A0' secureTextEntry={true}
                    onChangeText={value => this.props.changePassword(value)} />} */}


                <TouchableOpacity style={styleLogin.buttom} onPress={() => this.login()}>
                    <Text style={styleLogin.buttomText}>Entrar</Text>
                </TouchableOpacity>
                <View style={styleLogin.newUser}>
                    <Text style={styleLogin.newUserText}>Novo usuário?</Text>
                    <TouchableOpacity onPress={() => this.pageNewUser()}>
                        <Text style={styleLogin.newUserButtom}>Acesse aqui</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password
    }
)

export default connect(mapStateToProps, { changeEmail, changePassword })(Login)