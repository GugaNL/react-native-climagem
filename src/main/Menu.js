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



const Menus = {
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    },
    Consults: {
        name: 'Exams',
        screen: Exams,
        navigationOptions: {
            title: 'Exames',
            tabBarIcon: ({ tintColor }) =>
                <View>
                    <Icon name='list' size={30} color={tintColor} />
                    <Badge status='primary' value={3} containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
                </View>
                

        }
    },
}



const TabNav = createBottomTabNavigator(Menus)

export const newUserStackNav = createStackNavigator({
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

//export default TabNav
export default newUserStackNav
