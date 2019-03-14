const initialState = {
    exam: {
        id: '',
        name: '',
        old: '',
        genre: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        type: '',
        date: '',
        time: '',
        agreement: '',
        price: '130,00',
        obs: '',
        status: 'solicitado'
    },
    showAgreementName: false,
    showCalendarExam: false,
    showOverlay: false,
    listExams: [],
    listExamsBackup: [],
    resultOperation: null,
    statusListView: null,
    empty: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARRAY_EXAMS': 
            return {
                ...state,
                listExams: action.payload
            }
        case 'EMPTY_LIST':
            return {
                ...state,
                empty: action.payload
            }
        case 'CLEAR_LIST':
            return {
                ...state,
                listExams: action.payload
            }
        case 'CHANGE_STATUS_LIST_VIEW':
            return {
                ...state,
                statusListView: action.payload
            }
        case 'SUCESS_LIST_EXAMS':
        // console.log('listExams: ', action.payload)
            return {
                ...state,
                listExams: action.payload,
                listExamsBackup: action.payload
            }
        case 'SUCESS_ADD_EXAM':
        // console.log('Entrou no reducer: ', action.payload)
            return {
                ...state,
                resultOperation: action.payload,
                exam: {
                    ...state.exam,
                    name: '',
                    old: '',
                    genre: '',
                    phone: '',
                    email: '',
                    address: '',
                    city: '',
                    type: '',
                    date: '',
                    time: '',
                    agreement: '',
                    price: '',
                    obs: '',
                    showAgreementName: false,
                    // showCalendarExam: false,
                }
            }
        case 'ERROR_ADD_EXAM':
            return {
                ...state,
                resultOperation: action.payload
            }
        case 'CHANGE_EXAM':
            return {
                ...state,
                exam: {
                    ...state.exam,
                    [action.payload.field]: action.payload.value
                }
            }
        case 'VIEW_EXAM':
            return {
                ...state,
                exam: action.payload
            }
        case 'CHANGE_STATUS':
            console.log('entrou no reducer: ', state.exam)
            return {
                ...state,
                exam: {
                    ...state.exam,
                    status: action.payload
                }
            }
        case 'TOGGLE_SHOW_AGREEMENT':
            return {
                ...state,
                showAgreementName: action.payload
            }
        case 'TOGGLE_CALENDAR_EXAM':
            return {
                ...state,
                showCalendarExam: action.payload
            }
        case 'TOGGLE_OVERLAY':
            return {
                ...state,
                showOverlay: action.payload
            }
        default:
            return state
    }
}