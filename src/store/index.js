import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddlware from 'redux-saga'
import cashReducer from './cashReducer'
import customerReducer from './customerReducer'
import userReducer from './userStore'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagaMiddlware()

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootWatcher)