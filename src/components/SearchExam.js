import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'


export default class SearchExam extends React.Component {

    state ={
        search: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Pesquisar exame..'
                    onChangeText={search => this.setState({ search })}
                    value={this.state.search} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },
    input: {
        width: '90%'
    }

})



