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
    return{
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

export const addExam = ({ type, patient, phone, schedule, date, status, agreement, registration, price, obs }) => {
    return dispatch => {
        const id = uuid()
        firebase.database().ref('paciente/' + id)
            .set({
                type: type,
                patient: patient,
                phone: phone,
                schedule: schedule,
                date: date,
                status: status,
                agreement: agreement,
                registration: registration,
                price: price,
                obs: obs
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