import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import ExamsReducer from './ExamsReducer'

export default combineReducers({
    AuthReducer: AuthReducer,
    ExamsReducer: ExamsReducer
})