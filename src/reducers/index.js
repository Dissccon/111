import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import initialState from './stateReducer'

export default history => combineReducers({
  router: connectRouter(history),
  initialState,
})
