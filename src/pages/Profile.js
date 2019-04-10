import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
import { styleProfile } from '../layout/Styles'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { changeProfilePhoto } from '../store/actions/ProfileAction'
import { userLoggedOut } from '../store/actions/AuthAction'
import { Icon } from 'react-native-elements'
import { changeStatusListView, clearList, listExamsByStatus, emptyList } from '../store/actions/ExamAction'
import { toggleDateSearch } from '../store/actions/CalendarAction'



const options = {
    title: 'Selecione uma foto',
    maxHeight: 600,
    maxWidth: 800
}

class Profile extends React.Component {


    pickImage() {
        ImagePicker.showImagePicker(options, (response) => {
            if (!response.didCancel) {
                this.props.changePhoto(
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
        this.props.logOut()
        this.props.navigation.navigate('Login')
    }

    redirectListExams(status) {
        if(this.props.showCalendar === true) this.props.toggleDateSearch(false)
        this.props.clearList()
        this.props.listExamsByStatus(status)
        this.props.changeStatusListView(status)

        /*console.log('this.props.listExams: ', this.props.listExams)
        if(this.props.listExams.length == 0) {
            console.log('entrou no if do length 0')
            this.props.emptyList(true)
        } else {
            console.log('entrou no if do length com algo')
            this.props.emptyList(false)
        }*/

        this.props.navigation.navigate('Consults')
    }

    render() {

        let avatarWindow
        if (this.props.photo.uri != '') {
            avatarWindow = <Avatar size='xlarge' rounded title='MD' showEditButton
                source={this.props.photo}
                onEditPress={() => this.pickImage()}
            />
        } else {
            avatarWindow = <Avatar size='xlarge' rounded showEditButton
                icon={{ name: 'user-md', type: 'font-awesome', color: '#6495ED', size: 90 }}
                onEditPress={() => this.pickImage()}
            />
        }

        return (
            <View style={styleProfile.container}>

                {avatarWindow}

                <Text style={{ marginTop: 15, fontWeight: 'bold' }}>Paulo Lucena</Text>
                <Text>Mastologista</Text>

                <View style={{ marginTop: 25 }}>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.redirectListExams('confirmado')}>
                        <Badge status="success" value={3} />
                        <Text style={{ marginLeft: 10 }}>Exames marcados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15 }} onPress={() => this.redirectListExams('solicitado')}>
                        <Badge status="warning" value={2} />
                        <Text style={{ marginLeft: 10 }}>Exames pendentes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15 }} onPress={() => this.redirectListExams('cancelado')}>
                        <Badge status="error" value={1} />
                        <Text style={{ marginLeft: 10 }}>Exames cancelados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.loginPage() }}>
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
        photo: state.ProfileReducer.photo,
        email: state.AuthReducer.email,
        name: state.AuthReducer.name,
        listExams: state.ExamReducer.listExams,
        showCalendar: state.CalendarReducer.showCalendar
    }
)

const mapDispatchToProps = dispatch => (
    {
        logOut: () => dispatch(userLoggedOut()),
        changePhoto: photo => dispatch(changeProfilePhoto(photo)),
        changeStatusListView: status => dispatch(changeStatusListView(status)),
        clearList: () => dispatch(clearList()),
        listExamsByStatus: status => dispatch(listExamsByStatus(status)),
        toggleDateSearch: value => dispatch(toggleDateSearch(value)),
        emptyList: value => dispatch(emptyList(value))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)