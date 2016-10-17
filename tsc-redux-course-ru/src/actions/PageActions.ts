import * as Redux from 'redux' 
import {Action, actionCreator} from './ActionTypes' 
import {GET_PHOTOS_REQUEST, GET_PHOTOS_FAIL, GET_PHOTOS_SUCCESS} from '../constants/Page'
import {Year} from '../types' 
  
declare var VK: any;

let photosArr: any[] = []
let cached = false

function makeYearPhotos(photos: any[], selectedYear: number) {
    let createdYear: number, 
        yearPhotos: any[] = []
    photos.forEach((item: any) => {
        createdYear = new Date(item.created*1000).getFullYear()
        if (createdYear === selectedYear ) {
            yearPhotos.push(item)
        }
    })
    yearPhotos.sort((a,b) => b.likes.count - a.likes.count);
    return yearPhotos
}
function getMorePhotos(offset: number, count: number, year: number, dispatch: Redux.Dispatch<any>) {
    VK.Api.call('photos.getAll', {extended:1, count: count, offset: offset}, (r: any ) => {

        photosArr = photosArr.concat(r.response.slice(1))
        try {            
            if (offset <= r.response[0] - count) {
                offset += 200;
                photosArr = photosArr.concat()
                getMorePhotos(offset, count, year, dispatch)
            } 
            else {
                let photos = makeYearPhotos(photosArr, year)
                cached = true
                dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: photos
                })
            }
        }
        catch(e) {
            dispatch({
                type: GET_PHOTOS_FAIL,
                error: true,
                payload: new Error(e)
                })
        }
    })
}


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
            if (cached) {
                let photos = makeYearPhotos(photosArr, year)
                dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: photos
                })
            } 
            else {
                getMorePhotos(0,200,year,dispatch)
            }
        }
    }
}