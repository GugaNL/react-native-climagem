import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styleListExams } from '../layout/Styles'
import CalendarPicker from 'react-native-calendar-picker'
import moment from "moment"
import { connect } from 'react-redux'
import { toggleDateSearch, addArrayExams, changeDateBegin, changeDateEnd, addBackupArrayExams } from '../actions/ExamsAction'
import { mockExams } from '../utils/ListUsersMock'


class Calendar extends Component {

    onDateChange(date, type) {
        var dateConvert = moment(date).format("DD-MM-YYYY")
        if (type === 'START_DATE') {
            if (this.props.dateSearchEnd != null) {
                this.props.changeDateEnd(null)
            }
            this.props.changeDateBegin(dateConvert)
            //    console.log('Resultados: ', this.props.dateSearchBegin, this.props.dateSearchEnd)
        } else {
            this.props.changeDateEnd(dateConvert)
        }
        // type === 'START_DATE' ? this.props.changeDateBegin(dateConvert) : this.props.changeDateEnd(dateConvert)
    }

    calculateInterval() {
        var { arrayBackupExams } = this.props
        var arraySearch = []
        var dateExam = null
        var checkValue
        if (this.props.dateSearchBegin == null && this.props.dateSearchEnd == null) {
            Alert.alert('Insira um período no calendário')
        } else
            if (this.props.dateSearchBegin != null && this.props.dateSearchEnd == null) {
                var begin = moment(this.props.dateSearchBegin, 'DD-MM-YYYY')
                for (let i = 0; i < arrayBackupExams.length; i++) {
                    dateExam = moment(arrayBackupExams[i].date, 'DD-MM-YYYY')
                    checkValue = moment(dateExam).isSame(begin)
                    if (checkValue) arraySearch.push(arrayBackupExams[i])
                }
                this.props.addArrayExams(arraySearch)
            } else {
                var begin = moment(this.props.dateSearchBegin, 'DD-MM-YYYY')
                var end = moment(this.props.dateSearchEnd, 'DD-MM-YYYY')
                for (let i = 0; i < arrayBackupExams.length; i++) {
                    dateExam = moment(arrayBackupExams[i].date, 'DD-MM-YYYY')
                    checkValue = moment(dateExam).isBetween(begin, end)
                    if (checkValue) arraySearch.push(arrayBackupExams[i])
                }
                this.props.addArrayExams(arraySearch)
            }

    }

    clearSearch() {
        this.props.addArrayExams(mockExams)
    }


    render() {

        const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        const minDate = new Date()

        return (
            <View style={styleListExams.calendar}>
                <CalendarPicker weekdays={week} months={months}
                    nextTitle='Próximo' minDate={minDate} allowRangeSelection={true}
                    onDateChange={(date, type) => this.onDateChange(date, type)} />
                <View style={styleListExams.containerSearch}>
                    <TouchableOpacity style={styleListExams.buttonSearch} onPress={() => this.calculateInterval()}>
                        <Text style={styleListExams.textButtomSearch}>Pesquisar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleListExams.buttomClear} onPress={() => this.clearSearch()}>
                        <Icon name='eraser' size={25} style={styleListExams.clearIcon} />
                    </TouchableOpacity>
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
        dateSearchBegin: state.ExamsReducer.dateSearchBegin,
        dateSearchEnd: state.ExamsReducer.dateSearchEnd
    }
)

export default connect(mapStateToProps, { toggleDateSearch, addArrayExams, addBackupArrayExams, changeDateBegin, changeDateEnd })(Calendar)
