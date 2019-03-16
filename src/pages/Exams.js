import React from 'react'
import { View, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native'
import Exam from '../components/Exam'
import SearchExam from '../components/SearchExam'
import Calendar from '../components/Calendar'
import { styleListExams } from '../layout/Styles'
import { connect } from 'react-redux'
import { listExamsAxios, viewExam, listExamsByStatus, changeStatusListView } from '../store/actions/ExamAction'
import { toggleDateSearch } from '../store/actions/CalendarAction'
import EmptyResult from '../components/EmptyResult'


class Exams extends React.Component {

    state = {
        isFetching: false,
        animating: true,
    }

    async componentDidMount() {
        if (this.props.showCalendar === true) this.props.toggleDateSearch(false)
        if (this.props.statusListView == null) {
            setTimeout(() => {
                this.props.listExamsAxios()
                this.setState({ animating: false })
                if (this.props.listExams.length == 0) {
                    this.setState({ empty: true })
                }
            }, 2000)
        } else {
            setTimeout(() => {
                this.setState({ animating: false })
            }, 1500)
        }
    }


    showPatient(item) {
        this.props.loadExam(item)
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

        let messageEmptyResult
        if (this.props.empty == true) {
            messageEmptyResult = <EmptyResult />
        }

        return (
            <View style={styleListExams.container}>
                <SearchExam />
                {calendar}
                <View style={styleListExams.list}>
                    <ActivityIndicator animating={this.state.animating} color='#ffffff' />
                    {messageEmptyResult}
                    <FlatList data={this.props.listExams}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        onRefresh={() => this.onRefreshList()}
                        refreshing={this.state.isFetching}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 25, alignItems: 'center' }}>
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
        showCalendar: state.CalendarReducer.showCalendar,
        // arrayExams: state.ExamsReducer.arrayExams,
        // arrayBackupExams: state.ExamsReducer.arrayBackupExams,
        // querySearch: state.ExamsReducer.querySearch,
        listExams: state.ExamReducer.listExams,
        examView: state.ExamReducer.examView,
        statusListView: state.ExamReducer.statusListView,
        empty: state.ExamReducer.empty
    }
)

const mapDispatchToProps = dispatch => ({
    listExamsAxios: () => dispatch(listExamsAxios()),
    loadExam: exam => dispatch(viewExam(exam)),
    examsByStatus: status => dispatch(listExamsByStatus(status)),
    changeStatusListView: status => dispatch(changeStatusListView(status)),
    toggleDateSearch: value => dispatch(toggleDateSearch(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Exams)