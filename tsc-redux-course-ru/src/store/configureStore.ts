import { createStore, applyMiddleware, Reducer } from 'redux';
import rootReducer from '../reducers'

export default function configureStore(initialState?: any) {
    return createStore( rootReducer, initialState) 
}