import {Action, actionCreator} from './ActionTypes' 
import {Year} from '../types' 
  
export interface PageActionsProps {
    setYear(year: Year) : Action<Year>
}

export const PageActions = {
    setYear: actionCreator<Year>('SET_YEAR')
}