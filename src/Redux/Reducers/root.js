import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer'
import UserReducer from './UserReducer'
import {AdminReducer} from './AdminReducer'

const RootReducer = combineReducers({
    MovieReducer,
    UserReducer,
    AdminReducer
});

export default RootReducer;