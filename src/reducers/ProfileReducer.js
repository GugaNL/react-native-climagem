initialState = {
    photo: {
        uri: '',
        base64: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_PROFILE_PHOTO':
            return {
                ...state,
                photo: action.payload
            }
        default:
            return state
    }
}