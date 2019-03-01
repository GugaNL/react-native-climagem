import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Input, CheckBox, Overlay, Card, Divider } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'
import { styleAddExam } from '../layout/Styles'
import Calendar from '../components/Calendar'
import { connect } from 'react-redux'
import { changeExam, toggleShowAgreement, toggleShowCalendarExam, toggleOverlay, addExamAxios } from '../store/actions/ExamAction'
import { changeDateExam } from '../store/actions/CalendarAction'


class AddExam extends Component {

    _addExam() {
        console.log(this.props)
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
        let typeExams = [
            { value: 'Tipo' },
            { value: 'Mamografia' },
            { value: 'Abdominal' },
            { value: 'Gestação' },
            { value: 'Tireóide' },
            { value: 'Pélvica' }
        ]

        let genre = [
            { value: 'Masculino' },
            { value: 'Feminino' }
        ]

        let hours = [
            { value: '08:30' },
            { value: '10:30' },
            { value: '14:30' },
            { value: '16:00' }
        ]

        let agreementInput
        let price

        if (this.props.showAgreementName === true) {
            agreementInput = <Input placeholder='Nome do Plano'
                inputContainerStyle={styleAddExam.inputContainerName}
                inputStyle={{ textAlign: 'center' }}
                onChangeText={(text => this.props.changeExam(text, 'agreement'))} />
        } else {
            price = <View style={{ flexDirection: 'row', marginLeft: 10 }}>
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
        let hour
        if (this.props.dateExam != null) {
            dateField = <Text style={{ marginLeft: 20 }} onPress={() => this._toggleOverlay()} >{this.props.dateExam}</Text>
            hour = <Dropdown label='Horário' data={hours}
                containerStyle={{ width: 100, marginBottom: 18, marginLeft: 30 }}
                onChangeText={(text) => this.props.changeExam(text, 'time')}
                value={this.props.exam.time} />
        } else {
            dateField = <Text style={{ marginLeft: 20, backgroundColor: '#FDF5E6' }} onPress={() => this._toggleOverlay()}>Escolha a data aqui</Text>
        }


        return (
            <View style={styleAddExam.containerTitle}>
                <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styleAddExam.textPatientTitle}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#ffffff', marginTop: 35 }}>Solicite seu Exame</Text>
                        </View>
                    </View>

                    <Card containerStyle={styleAddExam.containerInfoPatient}>
                        <Text style={{ margin: 10, marginBottom: 20, fontSize: 12 }}>Paciente</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styleAddExam.infoPatient}>Nome </Text>
                            <Input placeholder='Nome completo'
                                inputContainerStyle={styleAddExam.inputContainerName}
                                inputStyle={{ textAlign: 'center' }}
                                onChangeText={(text => this.props.changeExam(text, 'name'))} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ flexDirection: 'row', width: 100 }}>
                                <Text style={styleAddExam.infoPatient}>Idade </Text>
                                <Input inputContainerStyle={styleAddExam.inputOld}
                                    inputStyle={{ textAlign: 'center' }}
                                    onChangeText={(text => this.props.changeExam(text, 'old'))} />
                            </View>
                            <View style={{ marginLeft: 60 }}>
                                <Dropdown label='Sexo' data={genre}
                                    containerStyle={{ width: 110, marginBottom: 16 }}
                                    onChangeText={(text) => this.props.changeExam(text, 'genre')}
                                    value={this.props.exam.genre} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styleAddExam.infoPatient}>Telefone </Text>
                            <Input placeholder='Apenas números' keyboardType='numeric'
                                inputContainerStyle={styleAddExam.inputPhone}
                                inputStyle={{ textAlign: 'center' }}
                                onChangeText={(text => this.props.changeExam(text, 'phone'))} />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={styleAddExam.infoPatient}>Email </Text>
                            <Input keyboardType='email-address' inputContainerStyle={styleAddExam.inputPhone}
                                onChangeText={(text => this.props.changeExam(text, 'email'))} />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={styleAddExam.infoPatient}>Endereço </Text>
                            <Input multiline={true} placeholder='Rua/Av Casa/Apto N Quadra' inputContainerStyle={styleAddExam.inputAdress}
                                inputStyle={{ textAlign: 'center' }}
                                onChangeText={(text => this.props.changeExam(text, 'address'))} />
                        </View>

                    </Card>

                    <Card containerStyle={styleAddExam.containerInfoExam}>
                        <Text style={{ margin: 10, marginBottom: 20, fontSize: 12 }}>Informações do Exame</Text>

                        <Dropdown label='Tipo de Exame' data={typeExams}
                            containerStyle={{ width: 170, marginBottom: 16, marginLeft: 10 }}
                            onChangeText={(text) => this.props.changeExam(text, 'type')}
                            value={this.props.exam.type} />

                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10, alignItems: 'center' }}>
                            <Text>Data</Text>
                            {dateField}
                            {hour}
                        </View>


                        <CheckBox title='Plano de Saúde' containerStyle={styleAddExam.checkboxAgreement}
                            onPress={() => this._toggleShowAgreement()}
                            checked={this.props.showAgreementName} />
                        {agreementInput}

                        {price}

                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Text style={styleAddExam.infoPatient}>Observação </Text>
                            <Input multiline={true} placeholder='Informação' inputContainerStyle={styleAddExam.inputObs}
                                inputStyle={{ textAlign: 'center' }}
                                onChangeText={(text => this.props.changeExam(text, 'obs'))} />
                        </View>
                    </Card>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity style={styleAddExam.buttomConfirm} onPress={() => this._addExam()}>
                            <Text style={styleAddExam.buttomText}>Solicitar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleAddExam.buttomCancel}>
                            <Text style={styleAddExam.buttomText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
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
    changeExam: (value, field) => dispatch(changeExam(value, field)),
    changeDateExam: date => dispatch(changeDateExam(date)),
    toggleShowAgreement: value => dispatch(toggleShowAgreement(value)),
    toggleShowCalendarExam: value => dispatch(toggleShowCalendarExam(value)),
    toggleOverlay: value => dispatch(toggleOverlay(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddExam)