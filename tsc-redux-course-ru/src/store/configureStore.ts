import { createStore, applyMiddleware, Reducer, Store } from 'redux'
import rootReducer from '../reducers'
import  * as createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState?: any) {
    const logger = createLogger()
    return createStore( rootReducer, initialState, applyMiddleware(thunk, logger)) 
}