import { combineReducers } from 'redux'
import inCartItems from './inCartItems'
//import filters from './filters'

const rootReducer = combineReducers({ inCartItems });

export default rootReducer;