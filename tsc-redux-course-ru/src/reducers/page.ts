import {PageState} from '../types'
import {Action} from '../actions/ActionTypes'
const initialState: PageState = {
    year: 2016,
    photos: []
}

export default function userstate(state = initialState, action: Action) {
    switch (action.type) {
        case 'SET_YEAR':
            return Object.assign({}, state, {year: action.payload})
            
        default:
            return state;
    }
}