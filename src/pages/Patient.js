import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { stylePatient } from '../layout/Styles'
import { Avatar, Divider, Card, Badge } from 'react-native-elements'
import { connect } from 'react-redux'
import {
  changeNamePatient, changeGenrePatient, changeEmailPatient, changeOldPatient, changePhonePatient,
  changeAgreementPatient, changeAddressPatient, changeObservationPatient, changePhotoPatient
} from '../actions/PatientAction'



class Patient extends Component {


  render() {
    return (
      <View style={stylePatient.containerTitle}>
        <View style={{ flexDirection: 'row' }}>
          <Avatar size='medium' rounded title='FT' containerStyle={{ marginTop: 15 }} />
          <View style={stylePatient.textPatientTitle}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Fulano de Tal</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>34 anos</Text>
              <Text> - Masculino</Text>
            </View>
          </View>
        </View>

        <Card containerStyle={stylePatient.containerInfoPatient}>
          <Text style={{ margin: 10, marginBottom: 20, fontSize: 12 }}>Informações do Paciente</Text>
          <Text style={stylePatient.infoPatient}>Telefone </Text>
          <Divider style={stylePatient.divider} />
          <Text style={stylePatient.infoPatient}>Email </Text>
          <Divider style={stylePatient.divider} />
          <Text style={stylePatient.infoPatient}>Naturaridade </Text>
          <Divider style={stylePatient.divider} />
          <Text style={stylePatient.infoPatient}>Endereço </Text>
        </Card>

        <Card containerStyle={stylePatient.containerInfoPatient}>
          <Text style={{ margin: 10, marginBottom: 20, fontSize: 12 }}>Informações do Exame</Text>
          <Text style={stylePatient.infoPatient}>Tipo </Text>
          <Divider style={stylePatient.divider} />
          <Text style={stylePatient.infoPatient}>Plano </Text>
          <Divider style={stylePatient.divider} />
          <Text style={stylePatient.infoPatient}>Valor </Text>
          <Divider style={stylePatient.divider} />
          <Text style={stylePatient.infoPatient}>Matrícula </Text>
          <Divider style={stylePatient.divider} />
          <Text style={stylePatient.infoPatient}>Data Marcada </Text>
          <Text style={stylePatient.infoPatient}>Observação </Text>
          <Divider style={stylePatient.divider} />
        </Card>

      </View>

    )
  }
}

const mapStateToProps = state => (
  {
    name: state.PatientReducer.changeNamePatient,
    genre: state.PatientReducer.changeGenrePatient,
    email: state.PatientReducer.changeEmailPatient,
    old: state.PatientReducer.changeOldPatient,
    phone: state.PatientReducer.changePhonePatient,
    agreement: state.PatientReducer.changeAgreementPatient,
    address: state.PatientReducer.changeAddressPatient,
    observation: state.PatientReducer.changeObservationPatient,
    photo: state.PatientReducer.changePhotoPatient
  }
)

export default connect(mapStateToProps, {
  changeNamePatient, changeGenrePatient, changeEmailPatient, changeOldPatient, changePhonePatient,
  changeAgreementPatient, changeAddressPatient, changeObservationPatient, changePhotoPatient
})(Patient)


