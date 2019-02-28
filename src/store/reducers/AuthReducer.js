const inititalState = {
    name: null,
    email: null,
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
            case 'USER_LOGGED_IN':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
            case 'USER_LOGGED_OUT':
             return {
                 ...state,
                 name: null,
                 email: null
             }
        default:
            return state
    }
}