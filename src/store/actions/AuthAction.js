import firebase from 'firebase'

export const changeEmail = value => ({
    type: 'CHANGE_EMAIL',
    payload: value
})

export const changePassword = value => ({
    type: 'CHANGE_PASSWORD',
    payload: value
})

export const changeName = value => ({
    type: 'CHANGE_NAME',
    payload: value
})

export const insertUser = ({ name,  email, password }) => {

    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                sucessAddUser(dispatch)
                //Alert.alert('Novo usuário foi cadastrado')
            }).catch((error) => {
                errorAddUser(dispatch, error)
                //Alert.alert('Erro no cadastro do usuário: ', error)
            })
    }
}


export const sucessAddUser = (dispatch) => {
    dispatch({
        type: 'SUCESS_ADD_USER',
        payload: 'OK'
    })
}

export const errorAddUser = (dispatch, error) => {
    dispatch(
        {
            type: 'ERROR_ADD_USER',
            payload: error.message
        }
    )
}

export const userLoggedIn = value => {
    return {
        type: 'USER_LOGGED_IN',
        payload: value
    }
}

export const userLoggedOut = value => {
    return {
        type: 'USER_LOGGED_OUT',
        payload: value
    }
}
