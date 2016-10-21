import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import timerReducer from './timerReducer'

export default combineReducers({
  counter: counterReducer,
  time: timerReducer
});