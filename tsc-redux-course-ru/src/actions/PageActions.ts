import * as Redux from 'redux' 
import {Action, actionCreator} from './ActionTypes' 
import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from '../constants/Page'
import {Year} from '../types' 
  
export interface PageActionsProps {
    getPhotos(year: Year) : (dispatch: Redux.Dispatch<any>) => any
}

export const PageActions = {
    getPhotos: function(year: Year){
        return (dispatch: Redux.Dispatch<any>) => {
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