import {Action, actionCreator} from './ActionTypes' 
import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from '../constants/Page'
import {Year} from '../types' 
  
export interface PageActionsProps {
    getPhotos(year: Year) :  (dispatch: (action: Action<any>) => any) => any
}

export const PageActions = {
    getPhotos: function(year: Year){
        return (dispatch: (action: Action<any>) => any) => {
            dispatch({
                type: GET_PHOTOS_REQUEST,
                payload: year
            })
            setTimeout(() => {
                dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: [1,2,3,4,5]
                })
            }, 1000)
        }
    }
}