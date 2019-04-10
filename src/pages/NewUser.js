import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import { changeEmail, changePassword, changeName, insertUser } from '../store/actions/AuthAction'
import { styleNewUser } from '../layout/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'


class NewUser extends React.Component {

    _insertUser() {
        Alert.alert('Não disponível na versão de demonstração')
        // const { name, email, password } = this.props
        // this.props.insertUser({ name, email, password })
    }

    render() {
        return (
            <View style={styleNewUser.container}>
                <Icon name='user-plus' size={90} color='#F5FFFA' style={{alignSelf: 'center'}} />
                <TextInput style={styleNewUser.input} placeholder='Nome completo'
                    placeholderTextColor='#A0A0A0' keyboardType='email-address'
                    onChangeText={value => this.props.changeName(value)} />
                <TextInput style={styleNewUser.input} placeholder='Seu email'
                    placeholderTextColor='#A0A0A0' keyboardType='email-address'
                    onChangeText={value => this.props.changeEmail(value)} />
                <TextInput style={styleNewUser.input} placeholder='Senha a ser usada'
                    placeholderTextColor='#A0A0A0' secureTextEntry={true}
                    onChangeText={value => this.props.changePassword(value)} />
                <Text style={styleNewUser.error}>{this.props.errorAddUser}</Text>
                <TouchableOpacity style={styleNewUser.buttom} onPress={() => this._insertUser()} >
                    <Text style={styleNewUser.buttomText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const mapStateToProps = state => (
    {
        name: state.AuthReducer.name,
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        errorAddUser: state.AuthReducer.errorAddUser
    }
)

export default connect(mapStateToProps, { changeEmail, changePassword, changeName, insertUser })(NewUser)