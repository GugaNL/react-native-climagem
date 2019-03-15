import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SearchBar } from 'react-native-elements'
import { styleListExams } from '../layout/Styles'
import { connect } from 'react-redux'
import { changeQuerySearch } from '../store/actions/ExamsAction'
import { toggleDateSearch } from '../store/actions/CalendarAction'
import { addArrayExams, emptyList } from '../store/actions/ExamAction'


class SearchExam extends Component {

    _toggleDateSearch() {
        this.props.showCalendar ? this.props.toggleDateSearch(false) : this.props.toggleDateSearch(true)
    }

    searchFilter(text) {
        listSearch = this.props.listExamsBackup
        newData = listSearch.filter(item => {
            const itemData = `${item.name.toLowerCase()} ${item.type.toLowerCase()}`
            const textData = text.toLowerCase()
            return itemData.indexOf(textData) > -1
        })
        if (newData.length == 0) {
            this.props.emptyList(true)
        } else {
            this.props.emptyList(false)
        }
        this.props.changeQuerySearch(text)
        this.props.addArrayExams(newData)
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <SearchBar containerStyle={styleListExams.search} inputContainerStyle={styleListExams.inputSearch}
                    lightTheme round placeholder='Paciente ou tipo do exame'
                    value={this.props.querySearch}
                    onChangeText={(text) => this.searchFilter(text)} autoCorrect={false} />
                <TouchableOpacity onPress={() => this._toggleDateSearch()}>
                    <Icon name='filter' style={{ marginTop: 50, marginLeft: 10 }} size={33} color='#FFFFFF' />
                </TouchableOpacity>
            </View>
        )
    }
}


const mapStateToProps = state => (
    {
        showCalendar: state.CalendarReducer.showCalendar,
        arrayExams: state.ExamsReducer.arrayExams,
        arrayBackupExams: state.ExamsReducer.arrayBackupExams,
        querySearch: state.ExamsReducer.querySearch,
        listExams: state.ExamReducer.listExams,
        listExamsBackup: state.ExamReducer.listExamsBackup,
    }
)

const mapDispatchToProps = dispatch => (
    {
        toggleDateSearch: value => dispatch(toggleDateSearch(value)),
        addArrayExams: list => dispatch(addArrayExams(list)),
        changeQuerySearch: text => dispatch(changeQuerySearch(text)),
        emptyList: value => dispatch(emptyList(value))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchExam)
