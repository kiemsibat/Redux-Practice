import { combineReducers } from 'redux'
import HobbyReducer from './hobby';
import UserReducer from './user';

const rootReducer = combineReducers({
    HobbyReducer,
    UserReducer,
})

export default rootReducer