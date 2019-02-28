import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SearchBar } from 'react-native-elements'
import { styleListExams } from '../layout/Styles'
import { connect } from 'react-redux'
import { toggleDateSearch, addArrayExams, changeQuerySearch, addBackupArrayExams } from '../store/actions/ExamsAction'
import {mockExams} from '../utils/ListUsersMock'


class SearchExam extends Component {

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

    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <SearchBar containerStyle={styleListExams.search} inputContainerStyle={styleListExams.inputSearch}
                    lightTheme round placeholder='Pesquisar consultas..'
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
        showCalendar: state.ExamsReducer.showCalendar,
        arrayExams: state.ExamsReducer.arrayExams,
        arrayBackupExams: state.ExamsReducer.arrayBackupExams,
        querySearch: state.ExamsReducer.querySearch,
    }
)

export default connect(mapStateToProps, { toggleDateSearch, addArrayExams, addBackupArrayExams, changeQuerySearch})(SearchExam)
