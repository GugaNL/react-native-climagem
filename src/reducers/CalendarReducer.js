const initialState = {
    showRange: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_RANGE':
            return {
                ...state,
                showRange: action.payload
            }
    
        default:
            return state
    }
}