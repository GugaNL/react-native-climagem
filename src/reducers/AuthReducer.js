const inititalState = {
    name: '',
    email: '',
    password: '',
    errorAddUser: ''
}

export default (state = inititalState, action) => {
    switch (action.type) {
        case 'CHANGE_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'CHANGE_PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
            case 'ERROR_ADD_USER':
            return {
                ...state,
                errorAddUser: action.payload
            }
        default:
            return state
    }
}