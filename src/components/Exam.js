import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'



export default class Exam extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containereElement}>
                    <Text style={styles.type}>{this.props.type}</Text>

                    <Text style={styles.patient}>{this.props.patient}</Text>

                    <View style={styles.rowElement}>
                        <Icon type='font-awesome' name='calendar' size={18} color='#48D1CC' />
                        <Text style={{ marginLeft: 5 }}>{this.props.date}</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Icon name='schedule' size={18} color='#48D1CC' />
                            <Text style={{ marginLeft: 5 }}>{this.props.schedule}</Text>
                        </View>
                    </View>
                    <View style={styles.rowElement}>
                        <Icon name='phone' size={18} color='#48D1CC' />
                        <Text style={{ marginLeft: 5 }}>{this.props.phone}</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        // borderWidth: 1,
        borderRadius: 5,
        width: Dimensions.get('window').width * 3 / 4,
        height: 150,
        shadowOffset: { width: 3, height: 3, },
        shadowColor: '#808080',
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 1,
    },
    containereElement: {
        marginTop: 15,
        marginLeft: 15,
    },
    patient: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    type: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#48D1CC',
        alignSelf: 'center',
    },
    rowElement: {
        flexDirection: 'row',
        marginTop: 15
    }
})