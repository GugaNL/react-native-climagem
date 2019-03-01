const initialState = {
    exam: {
        name: '',
        old: '',
        genre: '',
        phone: '',
        email: '',
        address: '',

        type: '',
        date: '',
        time: '',
        agreement: '',
        price: 130,
        obs: '',
        status: ''
    },
    showAgreementName: false,
    showCalendarExam: false,
    showOverlay: false,
    listExams: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SUCESS_LIST_EXAMS':
          console.log('action: ', action)
            return {
                ...state,
                listExams: action.payload
            }
        case 'CHANGE_EXAM':
            return {
                ...state,
                exam: {
                    ...state.exam,
                    [action.payload.field]: action.payload.value
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