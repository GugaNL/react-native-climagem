import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
import { styleProfile } from '../layout/Styles'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { changeProfilePhoto } from '../actions/ProfileAction'
import profileIcon from '../assets/imgs/doctor-icon.png'
import { Icon } from 'react-native-elements'


const options = {
    title: 'Selecione uma foto',
    maxHeight: 600,
    maxWidth: 800
}

class Profile extends React.Component {


    pickImage() {
        ImagePicker.showImagePicker(options, (response) => {
            if (!response.didCancel) {
                this.props.changeProfilePhoto(
                    {
                        image: { uri: response.uri, base64: response.data }
                    }
                )
                this.saveProfilePhoto()
            }
        })
    }

    async saveProfilePhoto() {
        Alert.alert('Foto carregada com sucesso ', this.props.photo)
    }

    loginPage() {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styleProfile.container}>

                <Avatar size='xlarge' rounded title='MD' showEditButton
                    source={this.props.photo.uri == '' ? profileIcon : this.props.photo}
                    onEditPress={() => this.pickImage()}
                />
                <Text style={{ marginTop: 15, fontWeight: 'bold' }}>Paulo Lucena</Text>
                <Text>Mastologista</Text>

                <View style={{ marginTop: 25 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Badge status="success" value={3} />
                        <Text style={{ marginLeft: 10 }}>Exames marcados</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Badge status="warning" value={2} />
                        <Text style={{ marginLeft: 10 }}>Exames pendentes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Badge status="error" value={1} />
                        <Text style={{ marginLeft: 10 }}>Exames cancelados</Text>
                    </View>

                    <TouchableOpacity onPress={() => {this.loginPage()}}>
                        <View style={{ marginTop: 30, alignItems: 'center' }}>
                            <Icon type='ionicon' size={50} name='ios-log-out' iconStyle={{ alignSelf: 'center', color: '#6495ED' }} />
                            <Text style={{ color: '#6495ED' }}>Sair</Text>
                        </View>
                    </TouchableOpacity>



                </View>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        photo: state.ProfileReducer.photo
    }
)

export default connect(mapStateToProps, { changeProfilePhoto })(Profile)