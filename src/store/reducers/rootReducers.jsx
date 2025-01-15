import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducers';
import taskReducer from '../reducers/taskReducers';
import weatherReducer from '../reducers/weatherReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: taskReducer,
    weather: weatherReducer,
});

export default rootReducer;
