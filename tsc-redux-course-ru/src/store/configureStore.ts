import { createStore, applyMiddleware, Reducer, Store } from 'redux'
import rootReducer from '../reducers'
import { ping } from './enhancers/ping'  

export default function configureStore(initialState?: any) {
    return createStore( rootReducer, initialState, applyMiddleware(ping)) 
}