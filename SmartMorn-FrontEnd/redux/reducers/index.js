import { combineReducers } from 'redux';
import auth from './auth';
import alarm from './alarm'
import sleep from './sleepSession';
import dashboard from './dashboard';
import adjustment from './adjustment';
export default combineReducers({
    auth,
    alarm,
    sleep,
    dashboard,
    adjustment
});
