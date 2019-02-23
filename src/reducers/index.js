import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import ExamsReducer from './ExamsReducer'
import PatientReducer from './PatientReducer'

export default combineReducers({
    AuthReducer: AuthReducer,
    ExamsReducer: ExamsReducer,
    PatientReducer: PatientReducer
})