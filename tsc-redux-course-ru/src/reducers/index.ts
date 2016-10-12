import {RootState} from '../types'

const initialState: RootState = {
    name: 'John',
    surname: 'React',
    age: 27
}

export default function userstate(state = initialState) {
    return state
}