import React from 'react'
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { styleExam } from '../layout/Styles'
import { connect } from 'react-redux'



class Exam extends React.Component {

    render() {

        var statusIcon = ''
        var colorIcon = ''

        if (this.props.status == 'confirmado') {
            statusIcon = 'ios-checkmark-circle'
            colorIcon = '#008000'
        } else
            if (this.props.status == 'aguardando') {
                statusIcon = 'ios-remove-circle'
                colorIcon = '#FFA500'
            } else {
                statusIcon = 'ios-close-circle'
                colorIcon = '#FF0000'
            }


        return (
            <View style={styleExam.container}>
                <View style={styleExam.containereElement}>
                    <Text style={styleExam.type}>{this.props.type}</Text>
                    <View style={styleExam.viewPatientTitleRow}>
                        <Text style={styleExam.patient}>Fulano</Text>
                        <Icon iconStyle={{ marginRight: 15 }} type='ionicon'
                            name={statusIcon} size={19} color={colorIcon}
                        />
                    </View>


                    <View style={styleExam.rowElement}>
                        <Icon type='font-awesome' name='calendar' size={18} color='#48D1CC' />
                        <Text style={{ marginLeft: 5 }}>{this.props.date}</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Icon name='schedule' size={18} color='#48D1CC' />
                            <Text style={{ marginLeft: 5 }}>10:30</Text>
                        </View>
                    </View>
                    <View style={styleExam.rowElement}>
                        <Icon name='phone' size={18} color='#48D1CC' />
                        <Text style={{ marginLeft: 5 }}>(87) 99715-4422</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(null, null)(Exam)

