import { combineReducers } from 'redux'
import toggleSideReducer from './toggleSideReducer'
import userListReducer from './userReducer'

const reducers = combineReducers({
  toggleSide: toggleSideReducer,
  users: userListReducer,
})

export default reducers
