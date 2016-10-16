import {UserState} from '../types'
import {Action, isType} from '../actions/ActionTypes'
import {LOGIN_SUCCES, LOGIN_FAIL} from '../constants/User'
const initialState: UserState = {
    name: '',
    error: ''
}

export default function userstate(state = initialState, action: Action<any>) {
    switch(action.type) {
    case LOGIN_SUCCES:
        return Object.assign({}, state, {name: action.payload, error: ''})
    case LOGIN_FAIL:
        return Object.assign({}, state, {error: action.payload.message})
    default:
        return state
    }
}