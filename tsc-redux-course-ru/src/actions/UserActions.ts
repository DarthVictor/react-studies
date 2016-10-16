import { LOGIN_REQUEST, LOGIN_SUCCES, LOGIN_FAIL, LOGIN_STATUS_REQUEST} from '../constants/User'
import * as Redux from 'redux' 
import {Action, actionCreator} from './ActionTypes' 
declare var VK: any;

export interface UserActionsProps {
    handleLogin() : (dispatch: Redux.Dispatch<any>) => any
    handleCheckStatus() : (dispatch: Redux.Dispatch<any>) => any
}
export const UserActions = {
    handleLogin: function()  {
        return (dispatch: Redux.Dispatch<any>) => {
            dispatch({
                type: LOGIN_REQUEST
            })
            VK.Auth.login((r: any) => {
                if (r.session) {
                    let username = r.session.user.first_name;
                    dispatch({
                        type: LOGIN_SUCCES,
                        payload: username
                    })
                }
                else {
                    dispatch({
                        type: LOGIN_FAIL,
                        error: true,
                        payload: new Error('Auth error')
                    })
                }
            }, 1028); // ask access for photos
        }
    },
    handleCheckStatus: function()  {
        return (dispatch: Redux.Dispatch<any>) => {
            dispatch({
                type: LOGIN_STATUS_REQUEST
            })
            VK.Auth.getLoginStatus((r: any) => {
                if (r.status === 'connected' ) {
                    if(r.session.user){
                        let username = r.session.user.first_name;
                        dispatch({
                            type: LOGIN_SUCCES,
                            payload: username
                        })
                    }                    
                }                
            }, true); // forse call to take user info
        }
    },
}