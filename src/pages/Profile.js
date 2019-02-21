import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Avatar} from 'react-native-elements'


export default class Profile extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                   <Avatar size='xlarge' rounded title='MD' />
                   <Text>Gustavo Nunes Lucena</Text>
                   <Text>Clínico geral</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
})