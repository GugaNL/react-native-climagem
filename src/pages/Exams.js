import React from 'react'
import { View, FlatList, ScrollView, TouchableHighlight } from 'react-native'
import Exam from '../components/Exam'
import SearchExam from '../components/SearchExam'
import Calendar from '../components/Calendar'
import { styleListExams } from '../layout/Styles'
import { mockExams } from '../utils/ListUsersMock'
import { connect } from 'react-redux'
import { toggleDateSearch, addArrayExams, changeQuerySearch, addBackupArrayExams } from '../actions/ExamsAction'



class Exams extends React.Component {

    componentWillMount() {
        this.props.addArrayExams(mockExams)
        this.props.addBackupArrayExams(mockExams)
    }

    showPatient() {
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
                                <TouchableHighlight onPress={() => this.showPatient()}>
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
    }
)


export default connect(mapStateToProps, { toggleDateSearch, addArrayExams, addBackupArrayExams, changeQuerySearch })(Exams)