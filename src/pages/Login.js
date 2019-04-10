import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styleLogin } from '../layout/Styles'
import logo from '../assets/imgs/logo2.png'
import { connect } from 'react-redux'
import { changeEmail, changePassword, userLoggedIn } from '../store/actions/AuthAction'
import { LoginButton, AccessToken } from 'react-native-fbsdk'


class Login extends React.Component {

    login() {
        this.props.navigation.navigate('TabNav')
    }

    loginFacebook(error, result) {
        if (error) {
            alert("Falha ao tentar logar: " + result.error)
            // console.log("Erro ao tentar logar pelo facebook: " + result.error)
        } else if (result.isCancelled) {
            alert("Login cancelado pelo usuário")
            // console.log("login is cancelled.")
        } else {
            AccessToken.getCurrentAccessToken().then((token) => {
                // alert('Logado')
                this.props.navigation.navigate('TabNav')
                // console.log(token.accessToken.toString())
            })
        }
    }

    pageNewUser() {
        this.props.navigation.navigate('NewUser')
    }

    render() {
        return (
            <View style={styleLogin.container}>
                <Image source={logo} style={styleLogin.logo} />

                <Input underlineColorAndroid='transparent' containerStyle={styleLogin.input2}
                    inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ marginLeft: 10, color: '#fff' }}
                    placeholder='Usuário' leftIcon={<Icon name='user' size={24} color='#C0C0C0' />}
                    placeholderTextColor='#C0C0C0'
                    onChangeText={value => this.props.changeEmail(value)}
                />

                <Input secureTextEntry={true} underlineColorAndroid='transparent' containerStyle={styleLogin.input2}
                    inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ marginLeft: 10 }} placeholder='Senha de acesso'
                    leftIcon={<Icon name='lock' size={24} color='#C0C0C0' />}
                    placeholderTextColor='#C0C0C0'
                    onChangeText={value => this.props.changePassword(value)}
                />

                <TouchableOpacity style={styleLogin.buttom} onPress={() => this.login()}>
                    <Icon name='sign-in' size={24} color='#C0C0C0' style={{ alignSelf: 'center', marginRight: 5 }} />
                    <Text style={styleLogin.buttomText}>Entrar</Text>
                </TouchableOpacity>


                <View style={styleLogin.newUser}>
                    <Text style={styleLogin.newUserText}>Novo usuário?</Text>
                    <TouchableOpacity onPress={() => this.pageNewUser()}>
                        <Text style={styleLogin.newUserButtom}>Cadastre-se aqui</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styleLogin.orButtom}>ou</Text>
                
                <View style={{ alignItems: 'center' }}>
                    <LoginButton
                        onLoginFinished={(error, result) => this.loginFacebook(error, result)}
                        onLogoutFinished={() => console.log("logout do facebook")}
                    />
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

const mapDispatchToProps = dispatch => {
    return {
        loginOn: user => dispatch(userLoggedIn(user)) //pega a action criada e encaminha para todos os reducers
    }
}

export default connect(mapStateToProps, { changeEmail, changePassword, userLoggedIn })(Login)