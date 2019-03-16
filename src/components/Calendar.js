import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styleListExams } from '../layout/Styles'
import CalendarPicker from 'react-native-calendar-picker'
import moment from "moment"
import { connect } from 'react-redux'
import { changeDateExam, changeDateBegin, changeDateEnd, toggleDateSearch } from '../store/actions/CalendarAction'
import { toggleOverlay, changeExam, addArrayExams } from '../store/actions/ExamAction'


class Calendar extends Component {

    constructor(props) {
        super(props)
    }

    onDateChange(date, type) {
        var dateConvert = moment(date).format("DD-MM-YYYY")
        if (this.props.showButtonClear === false) {
            this.props.changeDateExam(dateConvert)
            // this.props.changeExam(dateConvert, 'date')
        }
        if (type === 'START_DATE') {
            if (this.props.dateSearchEnd != null) {
                this.props.changeDateEnd(null)
            }
            this.props.changeDateBegin(dateConvert)
        } else {
            this.props.changeDateEnd(dateConvert)
        }

    }

    calculateInterval() {
        if (this.props.showButtonClear === false) {
            this.props.toggleOverlay(false)
        } else {
            var { listExamsBackup } = this.props
            var arraySearch = []
            var dateExam = null
            var checkValue
            if (this.props.dateSearchBegin == null && this.props.dateSearchEnd == null) {
                Alert.alert('Insira um período no calendário')
            } else
                if (this.props.dateSearchBegin != null && this.props.dateSearchEnd == null) {
                    var begin = moment(this.props.dateSearchBegin, 'DD-MM-YYYY')
                    for (let i = 0; i < listExamsBackup.length; i++) {
                        dateExam = moment(listExamsBackup[i].date, 'DD-MM-YYYY')
                        checkValue = moment(dateExam).isSame(begin)
                        if (checkValue) arraySearch.push(listExamsBackup[i])
                    }
                    this.props.addArrayExams(arraySearch)
                } else {
                    var begin = moment(this.props.dateSearchBegin, 'DD-MM-YYYY')
                    var end = moment(this.props.dateSearchEnd, 'DD-MM-YYYY')
                    for (let i = 0; i < listExamsBackup.length; i++) {
                        dateExam = moment(listExamsBackup[i].date, 'DD-MM-YYYY')
                        checkValue = moment(dateExam).isBetween(begin, end)
                        if (checkValue) arraySearch.push(listExamsBackup[i])
                    }
                    this.props.addArrayExams(arraySearch)
                }
        }
    }

    clearSearch() {
        this.props.addArrayExams(this.props.listExamsBackup)
        this.props.toggleDateSearch(false)
    }


    render() {

        const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        const minDate = new Date()

        let buttonClear
        if (this.props.showButtonClear === true) {
            buttonClear = <TouchableOpacity style={styleListExams.buttomClear} onPress={() => this.clearSearch()}>
                <Icon name='eraser' size={25} style={styleListExams.clearIcon} />
            </TouchableOpacity>
        }

        return (
            <View style={styleListExams.calendar}>
                <CalendarPicker weekdays={week} months={months}
                    nextTitle='Próximo' previousTitle='Anterior' minDate={minDate} allowRangeSelection={this.props.rangeValue}
                    onDateChange={(date, type) => this.onDateChange(date, type)} />
                <View style={styleListExams.containerSearch}>
                    <TouchableOpacity style={styleListExams.buttonSearch} onPress={() => this.calculateInterval()}>
                        <Text style={styleListExams.textButtomSearch}>{this.props.textButton}</Text>
                    </TouchableOpacity>
                    {buttonClear}
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        showCalendar: state.CalendarReducer.showCalendar,
        listExams: state.ExamReducer.listExams,
        listExamsBackup: state.ExamReducer.listExamsBackup,
        dateSearchBegin: state.CalendarReducer.dateSearchBegin,
        dateSearchEnd: state.CalendarReducer.dateSearchEnd,
        showOverlay: state.ExamReducer.showOverlay,
        dateExam: state.CalendarReducer.dateExam,
        exam: state.ExamReducer.exam
    }
)

const mapDispatchToProps = dispatch => (
    {
        toggleDateSearch: value => dispatch(toggleDateSearch(value)),
        changeDateBegin: value => dispatch(changeDateBegin(value)),
        changeDateEnd: value => dispatch(changeDateEnd(value)),
        toggleOverlay: value => dispatch(toggleOverlay(value)),
        changeDateExam: value => dispatch(changeDateExam(value)),
        addArrayExams: list => dispatch(addArrayExams(list))
    }
)

// export default connect(mapStateToProps, {
//     toggleDateSearch, addArrayExams, addBackupArrayExams, changeDateBegin,
//     changeDateEnd, toggleOverlay, changeExam, changeDateExam
// })(Calendar)
export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
