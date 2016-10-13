import {PageState} from '../types'

const initialState: PageState = {
    year: 2016,
    photos: []
}

export default function userstate(state = initialState) {
    return state
}