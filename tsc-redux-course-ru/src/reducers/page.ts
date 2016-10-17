import {PageState, Year} from '../types'
import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL} from '../constants/Page'
import {Action, isType} from '../actions/ActionTypes'
import {PageActions} from '../actions/PageActions'

const initialState: PageState = {
    year: 2015,
    photos: [],
    fetching: false,
    error: ''
}

export default function userstate(state: PageState = initialState, action: Action<any>) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return Object.assign({}, state, {year: action.payload, fetching: true, error: '' })
        case GET_PHOTOS_SUCCESS:
            return Object.assign({}, state, {photos: action.payload, fetching: false, error: '' })
        case GET_PHOTOS_FAIL:
            return Object.assign({}, state, {error: action.payload.message, fetching: false })
        default:
            return state;
    }
}
 