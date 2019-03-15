const initialState = {
    dateExam: null,
    showCalendar: false,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DATE_EXAM':
            return {
                ...state,
                dateExam: action.payload
            }
            case 'TOGGLE_DATE_SEARCH':
            return {
                ...state,
                showCalendar: action.payload
            }
        default:
            return state
    }
}