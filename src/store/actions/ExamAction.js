import firebase from 'firebase'

export const changeExam = (value, field) => {
    return {
        type: 'CHANGE_EXAM',
        payload: { value, field }
    }
}

export const toggleShowAgreement = value => {
    return {
        type: 'TOGGLE_SHOW_AGREEMENT',
        payload: value
    }
}

export const toggleShowCalendarExam = value => {
    return {
        type: 'TOGGLE_CALENDAR_EXAM',
        payload: value
    }
}

export const toggleOverlay = value => {
    return {
        type: 'TOGGLE_OVERLAY',
        payload: value
    }
}

export const addExam = (exam) => {
    return dispatch => {
        //const { currentUser } = firebase.auth()

        firebase.database().ref('/exame/')
            .push({
                type: exam.type,
                date: exam.date,
                agreement: exam.agreement,
                price: exam.price,
                obs: exam.obs
            })
            .then(() => {
                sucessAddExam(dispatch)
            })
            .catch((error) => {
                errorAddExam(dispatch, error)
            })
    }
}

export const sucessAddExam = dispatch => {
    dispatch({
        type: 'SUCESS_ADD_EXAM',
        payload: 'OK'
    })
}

export const errorAddExam = (dispatch, error) => {
    dispatch({
        type: 'ERROR_ADD_EXAM',
        payload: error.message
    })
}