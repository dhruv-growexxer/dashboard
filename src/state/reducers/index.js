import { combineReducers } from 'redux'
import toggleSideReducer from './toggleSideReducer'

const reducers = combineReducers({
  toggleSide: toggleSideReducer,
})

export default reducers
