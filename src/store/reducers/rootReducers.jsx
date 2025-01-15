import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducers';
import taskReducer from '../reducers/taskReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: taskReducer,
});

export default rootReducer;
    