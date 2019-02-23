import React from 'react'
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { styleExam } from '../layout/Styles'
import { connect } from 'react-redux'



class Exam extends React.Component {

    
    render() {
        return (
            <View style={styleExam.container}>
                    <View style={styleExam.containereElement}>
                        <Text style={styleExam.type}>{this.props.type}</Text>
                        <Text style={styleExam.patient}>{this.props.patient}</Text>
                        <View style={styleExam.rowElement}>
                            <Icon type='font-awesome' name='calendar' size={18} color='#48D1CC' />
                            <Text style={{ marginLeft: 5 }}>{this.props.date}</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                <Icon name='schedule' size={18} color='#48D1CC' />
                                <Text style={{ marginLeft: 5 }}>{this.props.schedule}</Text>
                            </View>
                        </View>
                        <View style={styleExam.rowElement}>
                            <Icon name='phone' size={18} color='#48D1CC' />
                            <Text style={{ marginLeft: 5 }}>{this.props.phone}</Text>
                        </View>
                    </View>
            </View>
        )
    }
}

export default connect(null, null)(Exam)

