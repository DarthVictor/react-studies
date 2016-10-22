import {combineReducers} from 'redux'
import { authStateReducer } from 'redux-oauth'
import counterReducer from './counterReducer'
import timerReducer from './timerReducer'

export default combineReducers({
  auth: authStateReducer,
  counter: counterReducer,
  time: timerReducer
});