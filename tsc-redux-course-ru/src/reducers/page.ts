import {PageState, Year} from '../types'
import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from '../constants/Page'
import {Action, isType} from '../actions/ActionTypes'
import {PageActions} from '../actions/PageActions'

const initialState: PageState = {
    year: 2016,
    photos: [],
    fetching: false
}

export default function userstate(state: PageState = initialState, action: Action<any>) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return Object.assign({}, state, {year: action.payload, fetching: true })
        case GET_PHOTOS_SUCCESS:
            return Object.assign({}, state, {photos: action.payload, fetching: false })
        default:
            return state;
    }
}
 