const initialState = {
    exam: {
        type: '',
        date: '',
        agreement: '',
        price: 130,
        obs: ''
    },
    showAgreementName: false,
    showCalendarExam: false,
    showOverlay: false
}

export default (state = initialState, action) => {
    switch (action.type) {
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