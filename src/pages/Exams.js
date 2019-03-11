import React from 'react'
import { View, FlatList, TouchableHighlight } from 'react-native'
import Exam from '../components/Exam'
import SearchExam from '../components/SearchExam'
import Calendar from '../components/Calendar'
import { styleListExams } from '../layout/Styles'
// import { mockExams, mockPatients } from '../utils/ListUsersMock'
import { connect } from 'react-redux'
import { listExamsAxios, viewExam } from '../store/actions/ExamAction'


class Exams extends React.Component {

    state = { 
        isFetching: false,
     }

    componentDidMount() {
        // this.props.addArrayExams(mockExams)
        // this.props.addBackupArrayExams(mockExams) //alterar para requisiçao de api do banco
        // this.props.changePatient(mockPatients) //alterar para requisiçao de api do banco
        console.log('componentDidMount disparado')
        this.props.listExamsAxios()
    }


    showPatient(item) {
        this.props.loadExam(item)
        console.log('item: ', item)
        this.props.navigation.navigate('Patient')
    }

    onRefreshList() {
        this.setState({ isFetching: true })
        this.props.listExamsAxios()
        this.setState({ isFetching: false })
    }

    render() {
        let calendar
        if (this.props.showCalendar === true) {
            calendar = <Calendar textButton='Pesquisar' rangeValue={true} showButtonClear={true} />
        }

        return (
            <View style={styleListExams.container}>
                <SearchExam />
                {calendar}
                <View style={styleListExams.list}>
                    <FlatList data={this.props.listExams}
                    showsVerticalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        onRefresh={() => this.onRefreshList()}
                        refreshing={this.state.isFetching}
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
        listExams: state.ExamReducer.listExams,
        examView: state.ExamReducer.examView
    }
)

const mapDispatchToProps = dispatch => ({
    listExamsAxios: () => dispatch(listExamsAxios()),
    loadExam: exam => dispatch(viewExam(exam))
})

export default connect(mapStateToProps, mapDispatchToProps)(Exams)