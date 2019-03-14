import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'


class EmptyResult extends Component {
  
  render() {
        return (
            <View style={{alignItems: 'center',}}>
              <Icon  name='frown-o' size={90} color='#FFFFFF' />
              <Text style={{color: '#FFFFFF', marginTop: 15, fontSize: 22}}>Não há resultados</Text>
            </View>
          )
  }
}

const mapStateToProps = state => (
    {
        listExams: state.ExamReducer.listExams
    }
)

export default connect(mapStateToProps, {})(EmptyResult)
