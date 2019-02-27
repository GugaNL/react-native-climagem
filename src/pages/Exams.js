import React from 'react'
import { View, FlatList, TouchableHighlight } from 'react-native'
import Exam from '../components/Exam'
import SearchExam from '../components/SearchExam'
import Calendar from '../components/Calendar'
import { styleListExams } from '../layout/Styles'
import { mockExams, mockPatients } from '../utils/ListUsersMock'
import { connect } from 'react-redux'
import { toggleDateSearch, addArrayExams, changeQuerySearch, addBackupArrayExams } from '../actions/ExamsAction'
import { changePatient } from '../actions/PatientAction'
import {toggleRange} from '../actions/CalendarAction'



class Exams extends React.Component {

    componentWillMount() {
        this.props.addArrayExams(mockExams)
        this.props.addBackupArrayExams(mockExams) //alterar para requisiçao de api do banco
        this.props.changePatient(mockPatients) //alterar para requisiçao de api do banco
        this.props.toggleRange(true)
    }

    //id, name, genre, email, old, phone, agreement, address, obs, photo

    showPatient(item) {
        this.props.navigation.navigate('Patient')

    }

    render() {
        let calendar
        if (this.props.showCalendar === true) {
            calendar = <Calendar />
        }

        return (
            <View style={styleListExams.container}>
                <SearchExam />
                {calendar}
                <View style={styleListExams.list}>
                    <FlatList data={this.props.arrayExams} keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 25 }}>
                                <TouchableHighlight onPress={() => this.showPatient(item)}>
                                    <Exam key={item.id} {...item} />
                                </TouchableHighlight>
                            </View>
                        )}>
                    </FlatList>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        showCalendar: state.ExamsReducer.showCalendar,
        arrayExams: state.ExamsReducer.arrayExams,
        arrayBackupExams: state.ExamsReducer.arrayBackupExams,
        querySearch: state.ExamsReducer.querySearch,
        patient: state.PatientReducer.patient,
        showRange: state.CalendarReducer.showRange
    }
)


export default connect(mapStateToProps, { toggleDateSearch, addArrayExams, addBackupArrayExams, changeQuerySearch, changePatient, toggleRange })(Exams)