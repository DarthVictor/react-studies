import { createStore, applyMiddleware, Reducer, Store } from 'redux'
import rootReducer from '../reducers'
import {RootState} from '../types'

export default function configureStore(initialState?: RootState) {
    return createStore( rootReducer, initialState) 
}