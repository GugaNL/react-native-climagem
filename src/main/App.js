import React, { Component } from 'react';
import { View } from 'react-native'
import  Menu from './Menu'
import {styleApp} from '../layout/Styles'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/index'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'


export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDRFSh89Sm0tPdIcjlTHbhiFyqBeU4VMMg",
      authDomain: "react-native-climagem.firebaseapp.com",
      databaseURL: "https://react-native-climagem.firebaseio.com",
      projectId: "react-native-climagem",
      storageBucket: "react-native-climagem.appspot.com",
      messagingSenderId: "148524411805"
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={styleApp.container}>
          <Menu />
        </View>
      </Provider>
    );
  }
}

