import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input, CheckBox, Overlay } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'
import { styleAddExam } from '../layout/Styles'
import Calendar from '../components/Calendar'
import { connect } from 'react-redux'
import { changeExam, toggleShowAgreement, toggleShowCalendarExam, toggleOverlay, addExamAxios } from '../store/actions/ExamAction'
import { changeDateExam } from '../store/actions/CalendarAction'


class AddExam extends Component {

    _addExam() {
        this.props.addExam(this.props.exam)
    }

    _toggleShowAgreement() {
        if (this.props.showAgreementName === true) {
            this.props.toggleShowAgreement(false)
        } else {
            this.props.toggleShowAgreement(true)
            this.props.changeExam('', 'price')
        }
    }

    _toggleOverlay() {
        this.props.showOverlay === true ? this.props.toggleOverlay(false) : this.props.toggleOverlay(true)
    }

    render() {
        let items = [
            { value: 'Tipo' },
            { value: 'Mamografia' },
            { value: 'Abdominal' },
            { value: 'Gestação' },
            { value: 'Tireóide' },
            { value: 'Pélvica' }
        ]

        let agreementInput
        let price

        if (this.props.showAgreementName === true) {
            agreementInput = <Input underlineColorAndroid='transparent' placeholder='Nome do plano'
                containerStyle={{ marginRight: 20, marginTop: 10 }}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                onChangeText={(text) => this.props.changeExam(text, 'agreement')}
            />
        } else {
            price = <View style={styleAddExam.containerRow}>
                <Text>Valor</Text>
                <Text style={{ marginLeft: 20 }}>{this.props.exam.price} R$</Text>
            </View>
        }

        if (this.props.showOverlay === true) {
            return (
                <Overlay overlayStyle={styleAddExam.overlay} isVisible onBackdropPress={() => this.props.toggleOverlay(false)}>
                    <Calendar textButton='Confirmar' rangeValue={false} showButtonClear={false} />
                </Overlay>
            )
        }

        let dateField
        if (this.props.dateExam != null) {
            dateField = <Text style={{ marginLeft: 20 }} onPress={() => this._toggleOverlay()} >{this.props.dateExam}</Text>
        } else {
            dateField = <Text style={{ marginLeft: 20 }} onPress={() => this._toggleOverlay()}>Escolha a data aqui</Text>
        }


        return (
            <View style={styleAddExam.containerMain}>

                <View style={styleAddExam.containerRow}>
                    <Text>Tipo</Text>
                    <Dropdown label='Tipo de Exame' data={items}
                        containerStyle={{ width: 170, marginBottom: 16, marginLeft: 20 }}
                        onChangeText={(text) => this.props.changeExam(text, 'type')}
                        value={this.props.exam.type} />
                </View>

                <View style={styleAddExam.containerRow}>
                    <Text>Data</Text>
                    {dateField}
                </View>

                <View style={styleAddExam.containerAgreement}>
                    <CheckBox title='Plano de Saúde' containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                        onPress={() => this._toggleShowAgreement()}
                        checked={this.props.showAgreementName} />
                    {agreementInput}
                </View>
                {price}
                <View style={styleAddExam.containerRow}>
                    <Text>Observação</Text>
                    <Input placeholder='Informação' inputContainerStyle={{ borderBottomWidth: 0, marginLeft: 20 }}
                        onChangeText={(text => this.props.changeExam(text, 'obs'))} />
                </View>


                <TouchableOpacity style={styleAddExam.buttomConfirm} onPress={() => this._addExam()}>
                    <Text style={styleAddExam.buttomText}>Solicitar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleAddExam.buttomCancel}>
                    <Text style={styleAddExam.buttomText}>Cancelar</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = state => ({
    exam: state.ExamReducer.exam,
    showAgreementName: state.ExamReducer.showAgreementName,
    showCalendarExam: state.ExamReducer.showCalendarExam,
    showOverlay: state.ExamReducer.showOverlay,
    dateExam: state.CalendarReducer.dateExam
})

const mapDispatchToProps = dispatch => ({
    addExam: exam => dispatch(addExamAxios(exam)),
    changeExam: exam => dispatch(changeExam(exam)),
    changeDateExam: date => dispatch(changeDateExam(date)),
    toggleShowAgreement: value => dispatch(toggleShowAgreement(value)),
    toggleShowCalendarExam: value => dispatch(toggleShowCalendarExam(value)),
    toggleOverlay: value => dispatch(toggleOverlay(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddExam)