import firebase from 'firebase'
import axios from 'axios'
import { Alert } from 'react-native'

export const clearList = () => {
    return {
        type: 'CLEAR_LIST',
        payload: []
    }
}

export const clearExam = () => {
    return {
        type: 'CLEAR_EXAM'
    }
}

export const addArrayExams = value => {
    return {
        type: 'ADD_ARRAY_EXAMS',
        payload: value
    }
}

// export const searchArrayExams = value => {
//     return {
//         type: 'ADD_BACKUP_ARRAY_EXAMS',
//         payload: value
//     }
// }

export const changeStatusListView = value => {
    return {
        type: 'CHANGE_STATUS_LIST_VIEW',
        payload: value
    }
}

export const changeExam = (value, field) => {
    return {
        type: 'CHANGE_EXAM',
        payload: { value, field }
    }
}

export const viewExam = exam => {
    return {
        type: 'VIEW_EXAM',
        payload: exam
    }
}

export const changeStatus = value => {
    // console.log('examView na action: ', value)
    return {
        type: 'CHANGE_STATUS',
        payload: value
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

export const sucessAddExam = value => {
    console.log('Entrou no sucessAddExam')
    return {
        type: 'SUCESS_ADD_EXAM',
        payload: value
    }
}

export const errorAddExam = error => {
    console.log('Entrou no errorAddExam: ', error)
    return {
        type: 'ERROR_ADD_EXAM',
        payload: error
    }
}

//Usando Axios
export const addExamAxios = exam => {
    return dispatch => {
        axios.post('/exames.json', { ...exam })
            .then(() => {
                Alert.alert('Sua consulta foi solicitada com sucesso')
                dispatch(sucessAddExam('OK'))
            })
            .catch(error => {
                Alert.alert('Erro na solicitação da consulta ', error)
                dispatch(errorAddExam(error))
            })
    }
}

export const updateExamAxios = exam => {
    // console.log('exam na action update: ', exam)
    return dispatch => {
        axios.put(`/exames/${exam.id}.json`, {
            ...exam
        })
            .then(() => {
                Alert.alert('A solicitação do exame foi confirmada')
                dispatch(listExamsAxios())
            })
    }
}

//Usando fetch
// export const addExamFetch = exam => {
//     return async dispatch => {
//         try {
//             const config = {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(exam)
//             }
//             const response = await fetch(url, config)

//             if (response.status == '200') {
//                 dispatch(sucessAddExam('OK'))
//             } else {
//                 dispatch(errorAddExam(error))
//             }
//         } catch (error) {
//             dispatch(errorAddExam(error))
//         }
//     }
// }


export const listExamsAxios = () => {
    return dispatch => {
        axios.get('/exames.json')
            .then(res => {
                const rawdata = res.data
                const listExams = []
                for (let key in rawdata) {
                    listExams.push({
                        ...rawdata[key],//Pega o valor de cada key do json, que são os caracteres gerados como id
                        id: key //cria um campo id pra guardar as keys do firebase
                    })
                }
                if (listExams.length == 0) {
                    dispatch(emptyList(true))
                } else {
                    dispatch(emptyList(false))
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


export const emptyList = value => {
    return {
        type: 'EMPTY_LIST',
        payload: value
    }
}

export const listExamsByStatus = status => {
    return  dispatch => {
        axios.get('/exames.json')
            .then(res => {
                const rawData = res.data
                const listExams = []
                for (let key in rawData) {
                    if (rawData[key].status == status) {
                        listExams.push({
                            ...rawData[key],
                            id: key
                        })
                    }
                }
                dispatch(sucessListExams(listExams))
            })
    }
}

export const sucessListExams = list => {
    return {
        type: 'SUCESS_LIST_EXAMS',
        payload: list
    }
}


// export const addExam = (exam) => {
//     return dispatch => {
//         //const { currentUser } = firebase.auth()
//         firebase.database().ref('/exame/')
//             .push({
//                 type: exam.type,
//                 date: exam.date,
//                 agreement: exam.agreement,
//                 price: exam.price,
//                 obs: exam.obs
//             })
//             .then(() => {
//                 sucessAddExam(dispatch)
//             })
//             .catch((error) => {
//                 errorAddExam(dispatch, error)
//             })
//     }
// }