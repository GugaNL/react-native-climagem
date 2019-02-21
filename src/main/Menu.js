import React from 'react'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Profile from '../pages/Profile'
import Exams from '../pages/Exams'
import Login from '../pages/Login'
import NewUser from '../pages/NewUser'



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
                <Icon name='list' size={30} color={tintColor} />
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
    TabNav: {
        screen: TabNav,
        navigationOptions: {
            header: null
        }
    }
})

//export default TabNav
export default newUserStackNav
