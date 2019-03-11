import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/AuthReducer'
import ExamsReducer from './reducers/ExamsReducer'
import PatientReducer from './reducers/PatientReducer'
import ProfileReducer from './reducers/ProfileReducer'
import ExamReducer from './reducers/ExamReducer'
import CalendarReducer from './reducers/CalendarReducer'

const reducers = combineReducers({
    AuthReducer: AuthReducer,
    ExamsReducer: ExamsReducer,
    PatientReducer: PatientReducer,
    ProfileReducer: ProfileReducer,
    ExamReducer: ExamReducer,
    CalendarReducer: CalendarReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
    // return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig