import React, { Component } from 'react'
import { View, Text, Alert, ScrollView } from 'react-native'
import { stylePatient } from '../layout/Styles'
import { Avatar, Divider, Card, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { changeStatus, updateExamAxios } from '../store/actions/ExamAction'



class Patient extends Component {


  confirmExam() {
    Alert.alert(
      'Aviso',
      'Deseja confirmar a solicitação do exame?',
      [
        {
          text: 'Cancelar',
          //onPress: () => console.log('Cancelar'),
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => this._changeExam() },
      ]
    )
  }

  _changeExam() {
    this.props.aproveStatus('confirmado')
    this.props.aproveExam(this.props.examView)
  }

  render() {

    let priceRowText
    let agreementRowText
    let buttonApprove
    if (this.props.examView.price) {
      priceRowText =
        <View>
          <Text style={stylePatient.infoPatient}>Valor      {this.props.examView.price}</Text>
          <Divider style={stylePatient.divider} />
        </View>
    }

    if (this.props.examView.agreement) {
      agreementRowText =
        <View>
          <Text style={stylePatient.infoPatient}>Plano      {this.props.examView.agreement}</Text>
          <Divider style={stylePatient.divider} />
        </View>
    }

    if (this.props.examView.status != 'confirmado') {
      console.log('vai exebir o botao')
      buttonApprove = <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} titleStyle={{ marginLeft: 7 }}
        icon={
          <Icon
            type='ionicon'
            name='ios-checkmark-circle'
            size={18}
            color="#32CD32"
          />
        }
        title="Confirmar"
        onPress={() => this.confirmExam()}
      />
    }


    return (
      <View style={stylePatient.containerTitle}>
        <ScrollView contentContainerStyle={{width: '100%', alignItems: 'center'}}>
          <View style={{ flexDirection: 'row' }}>
            <Avatar size='medium' rounded title='FT' containerStyle={{ marginTop: 15 }} />
            <View style={stylePatient.textPatientTitle}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{this.props.examView.name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>{this.props.examView.old} anos</Text>
                <Text> - {this.props.examView.genre}</Text>
              </View>
            </View>
          </View>

          <Card containerStyle={stylePatient.containerInfoPatient}>
            <Text style={{ margin: 10, marginBottom: 20, fontSize: 12 }}>Informações do Paciente</Text>
            <Text style={stylePatient.infoPatient}>Telefone      {this.props.examView.phone}</Text>
            <Divider style={stylePatient.divider} />
            <Text style={stylePatient.infoPatient}>Email      {this.props.examView.email}</Text>
            <Divider style={stylePatient.divider} />
            <Text style={stylePatient.infoPatient}>Cidade      {this.props.examView.city}</Text>
            <Divider style={stylePatient.divider} />
            <Text style={stylePatient.infoPatient}>Endereço      {this.props.examView.address}</Text>
          </Card>

          <Card containerStyle={stylePatient.containerInfoExam}>
            <Text style={{ margin: 10, marginBottom: 20, fontSize: 12 }}>Informações do Exame</Text>
            <Text style={stylePatient.infoPatient}>Tipo do Exame     {this.props.examView.type}</Text>
            <Divider style={stylePatient.divider} />

            {agreementRowText}

            {priceRowText}

            <Text style={stylePatient.infoPatient}>Data Marcada      {this.props.examView.date}</Text>
            <Divider style={stylePatient.divider} />
            <Text style={stylePatient.infoPatient}>Horário      {this.props.examView.time}</Text>
            <Divider style={stylePatient.divider} />
            <Text style={stylePatient.infoPatient}>Observação      {this.props.examView.obs}</Text>
          </Card>

          {buttonApprove}
        </ScrollView>
      </View>

    )
  }
}

const mapStateToProps = state => (
  {
    examView: state.ExamReducer.exam
  }
)

const mapDispatchToProps = dispatch => ({
  aproveStatus: value => dispatch(changeStatus(value)),
  aproveExam: exam => dispatch(updateExamAxios(exam)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Patient)


