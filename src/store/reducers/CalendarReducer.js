const initialState = {
    dateExam: null,
    showCalendar: false,
    dateSearchBegin: null,
    dateSearchEnd: null
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
        case 'CHANGE_DATE_BEGIN':
            return {
                ...state,
                dateSearchBegin: action.payload
            }
        case 'CHANGE_DATE_END':
            return {
                ...state,
                dateSearchEnd: action.payload
            }
        default:
            return state
    }
}