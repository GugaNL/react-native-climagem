import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import ExamsReducer from './ExamsReducer'
import PatientReducer from './PatientReducer'
import ProfileReducer from './ProfileReducer'
import ExamReducer from './ExamReducer'
import CalendarReducer from './CalendarReducer'

export default combineReducers({
    AuthReducer: AuthReducer,
    ExamsReducer: ExamsReducer,
    PatientReducer: PatientReducer,
    ProfileReducer: ProfileReducer,
    ExamReducer: ExamReducer,
    CalendarReducer: CalendarReducer
})