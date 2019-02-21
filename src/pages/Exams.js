import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, TextInput, Dimensions, Alert } from 'react-native'
import Exam from '../components/Exam'
import { SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { toggleDateSearch, addArrayExams, changeQuerySearch, changeDateBegin, changeDateEnd, addBackupArrayExams } from '../actions/ExamsAction'
import CalendarPicker from 'react-native-calendar-picker'
import moment from "moment"



const mockExams = [
    {
        id: 1,
        type: 'Cardiologia',
        patient: 'Marcos de Souza',
        phone: '(81) 99715-4466',
        schedule: '15:30',
        date: '02-03-2019'
    },
    {
        id: 2,
        type: 'Mamografia',
        patient: 'Elenilza Barros',
        phone: '(87) 3851-8956',
        schedule: '09:30',
        date: '25-02-2019'
    },
    {
        id: 3,
        type: 'Gestação',
        patient: 'Roberta Amorin',
        phone: '(87) 991324567',
        schedule: '10:00',
        date: '10-02-2019'
    },
    {
        id: 4,
        type: 'Ortopédico',
        patient: 'João Almeida',
        phone: '(87) 999326548',
        schedule: '08:30',
        date: '13-03-2019'
    }
]

class Exams extends React.Component {

    componentWillMount() {
        this.props.addArrayExams(mockExams)
        this.props.addBackupArrayExams(mockExams)
    }

    _toggleDateSearch() {
        this.props.showCalendar ? this.props.toggleDateSearch(false) : this.props.toggleDateSearch(true)
    }

    searchFilter(text) {
        var arrayBackup = this.props.arrayExams
        var newData = arrayBackup
        newData = mockExams.filter(item => {
            // const itemData = item.patient.toLowerCase()
            const itemData = `${item.patient.toLowerCase()}
            ${item.type.toLowerCase()}`
            const textData = text.toLowerCase()
            return itemData.indexOf(textData) > -1
        })
        this.props.changeQuerySearch(text)
        this.props.addArrayExams(newData)
    }

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


    render() {
        const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        const minDate = new Date()
        let calendar

        if (this.props.showCalendar === true) {
            calendar =
                <View style={styles.calendar}>
                    <CalendarPicker weekdays={week} months={months}
                        nextTitle='Próximo' minDate={minDate} allowRangeSelection={true}
                        onDateChange={(date, type) => this.onDateChange(date, type)} />
                    <TouchableOpacity style={styles.buttonSearch} onPress={() => this.calculateInterval()}>
                        <Text style={styles.textButtomSearch}>Pesquisar</Text>
                    </TouchableOpacity>
                </View>
        }

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <SearchBar containerStyle={styles.search} inputContainerStyle={styles.inputSearch}
                        lightTheme round placeholder='Pesquisar consultas..'
                        value={this.props.querySearch}
                        onChangeText={(text) => this.searchFilter(text)} autoCorrect={false} />

                    <TouchableOpacity onPress={() => this._toggleDateSearch()}>
                        <Icon name='filter' style={{ marginTop: 50, marginLeft: 10 }} size={33} color='#FFFFFF' />
                    </TouchableOpacity>
                </View>
                {calendar}

                <View style={styles.list}>
                    <FlatList data={this.props.arrayExams} keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 25 }}>
                                <Exam key={item.id} {...item} />
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
        dateSearchBegin: state.ExamsReducer.dateSearchBegin,
        dateSearchEnd: state.ExamsReducer.dateSearchEnd
    }
)


export default connect(mapStateToProps, { toggleDateSearch, addArrayExams, addBackupArrayExams, changeQuerySearch, changeDateBegin, changeDateEnd })(Exams)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#48D1CC',
    },
    input: {
        backgroundColor: '#2c3e50',
        height: 40
    },
    search: {
        backgroundColor: 'transparent',
        marginTop: 50,
        width: '87%'
    },
    inputSearch: {
        backgroundColor: '#B0E0E6',
    },
    list: {
        flex: 2,
        alignItems: 'center',
        marginTop: 10,
    },
    calendar: {
        flex: 3,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    buttonSearch: {
        backgroundColor: '#B0E0E6',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
        height: 30,
        borderRadius: 15,
        marginTop: 25
    },
    textButtomSearch: {
        fontWeight: 'bold'
    }
})
