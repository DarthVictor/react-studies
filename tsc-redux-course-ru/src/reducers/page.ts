import {PageState, Year} from '../types'

import {Action, isType} from '../actions/ActionTypes'
import {PageActions} from '../actions/PageActions'

const initialState: PageState = {
    year: 2016,
    photos: []
}

export default function userstate(state: PageState = initialState, action: Action<any>) {
    if (isType(action, PageActions.setYear)) {
        const action_setYear: Action<Year> = action;
        return Object.assign({}, state, {year: action_setYear.payload})
    }
    else{
            return state;
    }
}
 