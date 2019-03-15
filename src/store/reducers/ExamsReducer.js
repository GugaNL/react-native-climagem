const initialState = {
    // showCalendar: false,
    arrayExams: [],
    arrayBackupExams: [],
    querySearch: '',
    dateSearchBegin: null,
    dateSearchEnd: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case 'TOGGLE_DATE_SEARCH':
        //     return {
        //         ...state,
        //         showCalendar: action.payload
        //     }
        case 'ADD_ARRAY_EXAMS':
            return {
                ...state,
                arrayExams: action.payload
            }
        case 'ADD_BACKUP_ARRAY_EXAMS':
            return {
                ...state,
                arrayBackupExams: action.payload
            }
        case 'CHANGE_QUERY_SEARCH':
            return {
                ...state,
                querySearch: action.payload
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
            return {
                ...state
            }
    }
}