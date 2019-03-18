import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Notifications extends Component {
  
  render() {
    return (
      <View style={{backgroundColor: '#48D1CC', flex: 1,  justifyContent: 'center'}}>
        <Text style={{fontSize: 40, color: '#FFFFFF', alignSelf: 'center'}}> Não há avisos </Text>
      </View>
    )
  }
}
