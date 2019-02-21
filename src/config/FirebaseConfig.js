import firebase from 'firebase'

export default config => {

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