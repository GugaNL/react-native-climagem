import { createStore, combineReducers} from 'redux'
import AuthReducer from './reducers/AuthReducer'

const reducers = combineReducers({
    AuthReducer: AuthReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig