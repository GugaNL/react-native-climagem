import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Badge } from 'react-native-elements'
import Profile from '../pages/Profile'
import Exams from '../pages/Exams'
import Login from '../pages/Login'
import NewUser from '../pages/NewUser'
import Patient from '../pages/Patient'
import AddExam from '../pages/AddExam'
import Notifications from '../pages/Notifications'
import { clearList } from '../store/actions/ExamAction'
import { connect } from 'react-redux'



const tabBarOnPress = ({ navigation, defaultHandler }) => {
    // console.log('Entrou', navigation.state.key)
    const { isFocused, state, goBack } = navigation
    if (isFocused()) {
        console.log('No focus ')
        if (state.routes.length > 1) {
            for (let i = 0; i < state.routes.length - 1; i += 1) {
                goBack()
            }
        } else {
            console.log('Entrou no else ')
        }
    } else {
        if(state.routeName == 'Consults') {
            // this.props.clearList()
        }
        // console.log('Entrou no ultimo else', state.routeName)
        defaultHandler()
    }
}

const Menus = {
    Profile: {
        name: 'Perfil',
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    },
    AddExam: {
        name: 'Consulta',
        screen: AddExam,
        navigationOptions: {
            title: '',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='plus-circle' size={60} color='#FF4500' style={{ position: 'absolute', marginBottom: 25 }} />
        }
    },
    Consults: {
        name: 'Exams',
        screen: Exams,
        navigationOptions: {
            title: 'Exames',
            tabBarIcon: ({ tintColor }) =>
                (<View>
                    <Icon name='list' size={30} color={tintColor} />
                    <Badge status='primary' value={3} containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
                </View>),
            tabBarOnPress
        }
    },
    Notifications: {
        name: 'Notifications',
        screen: Notifications,
        navigationOptions: {
            title: 'Avisos',
            tabBarIcon: ({ tintColor }) =>
                (<View>
                    <Icon name='bell-o' size={30} color={tintColor} />
                    {/* <Badge status='primary' value={3} containerStyle={{ position: 'absolute', top: -4, right: -4 }} /> */}
                </View>)
        }
    },
}



const TabNav = createBottomTabNavigator(Menus, { initialRouteName: 'Profile' })

 const newUserStackNav = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Acesso',
            headerBackTitle: null
        }
    },
    NewUser: {
        screen: NewUser,
        navigationOptions: {
            title: 'Novo Usuário',
        }
    },
    Patient: {
        screen: Patient,
        navigationOptions: {
            title: 'Dados do Paciente',
        }
    },
    TabNav: {
        screen: TabNav,
        navigationOptions: {
            header: null
        }
    }
})

const mapStateToProps = state => (
    {
        listExams: state.ExamReducer.listExams
    }
)

const mapDispatchToProps = dispatch => (
    {
        clearList: () => dispatch(clearList())
    }
)
//export default TabNav
export default connect(mapStateToProps, mapDispatchToProps)(newUserStackNav)
