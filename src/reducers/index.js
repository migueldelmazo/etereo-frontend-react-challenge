import { combineReducers } from 'redux'
import app from './app'
import phoneDetail from './phoneDetail'
import phones from './phones'

export default combineReducers({
  app,
  phoneDetail,
  phones
})
