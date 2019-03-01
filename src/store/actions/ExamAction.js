import firebase from 'firebase'
import axios from 'axios'


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

//Usando Axios
export const addExamAxios = exam => {
    return dispatch => {
        axios.post('/exames.json', { ...exam })
            .then((res) => {
                dispatch(sucessAddExam(res.data))
            })
            .catch(error => {
                console.log('Erro na requisição: ', error)
            })
    }
}

export const listExamsAxios = () => {
    return dispatch => {
        axios.get('/exames.json')
            .then(res => {
                const rawdata = res.data
                const listExams = []
                for (let key in rawdata) {
                    listExams.push({
                        ...rawdata[key], //Pega o valor de cada key do json, que são os caracteres gerados como id
                        id: key //cria um campo id pra guardar as keys do firebase
                    })
                }
                dispatch(sucessListExams(listExams))
            })

        // firebase.database().ref('/exames')
        // .on('value', snapshot => {
        //     let data = snapshot.val()
        //     let items = Object.values(data)
        //     console.log('lista items: ', items)
        // })
    }
}

export const sucessListExams = list => {
    return {
        type: 'SUCESS_LIST_EXAMS',
        payload: list
    }
}