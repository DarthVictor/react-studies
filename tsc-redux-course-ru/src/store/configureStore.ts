import { createStore, applyMiddleware, Reducer, Store } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState?: any) {
    return createStore( rootReducer, initialState) 
}