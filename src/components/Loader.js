import React, { Component } from 'react'
import { View, Modal, ActivityIndicator, Text } from 'react-native'
import { LoaderStyle } from '../layout/Styles'

export default class Loader extends Component {


    render() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.props.loading}
                onRequestClose={() => { console.log('close modal') }}>
                <View style={LoaderStyle.modalBackground}>
                    <View style={LoaderStyle.activityIndicatorWrapper}>
                        <ActivityIndicator animating={this.props.loading} />
                        <Text style={LoaderStyle.textStyle}>Aguarde..</Text>
                    </View>
                </View>
            </Modal>
        )
    }
}
