const initialState = {
    dateExam: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DATE_EXAM':
            return {
                ...state,
                dateExam: action.payload
            }
    
        default:
            return state
    }
}