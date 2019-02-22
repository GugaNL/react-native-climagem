import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Avatar} from 'react-native-elements'
import {styleProfile} from '../layout/Styles'


export default class Profile extends React.Component {
    render() {
        return(
            <View style={styleProfile.container}>
                   <Avatar size='xlarge' rounded title='MD' />
                   <Text>Paulo Lucena</Text>
                   <Text>Mastologista</Text>
            </View>
        )
    }
}
