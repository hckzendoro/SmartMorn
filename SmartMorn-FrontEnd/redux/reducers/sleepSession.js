import _ from 'lodash';
import axios from '../../utils/api';

import { defineAction } from 'redux-define';

const App = 'SMARTMORN';

const ACTION_AUTH_SLEEP = defineAction('AUTH_SLEEP', ['PENDING', 'RESOLVED', 'REJECTED','CLEAR'], App);
console.log(ACTION_AUTH_SLEEP);

const initialState = {
    loading: false,
    error: '',
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_AUTH_SLEEP.RESOLVED: 
            return {
                ...state,
                error: false,
                message: action.payload.message
            };
        case ACTION_AUTH_SLEEP.PENDING: 
            return {
                ...state,
               
            }
        case ACTION_AUTH_SLEEP.REJECTED: 
            return {
                ...state,
               
            }
        case ACTION_AUTH_SLEEP.CLEAR: 
            return {
                ...state,
                message: false
            }
        default: return state;
    }
};

export const actions = {
    setSleepSession: (state) => (dispatch)  => {
        console.log('work @ redux')
        dispatch({
            type: ACTION_AUTH_SLEEP.PENDING
        })
        axios().post('/users/setsleep',{
            time: state.sleepTime
        }).then((resp) => {
            if(!resp.data.error) {
                dispatch({
                    type: ACTION_AUTH_SLEEP.RESOLVED,
                    payload: {
                        message: resp.data.message
                    }
                })
                
            } else {
                dispatch({
                    type: ACTION_AUTH_SLEEP.REJECTED,
                    payload: {
                        message: resp.data.message
                    }
                })
            }
        }).catch((error) => {
            return dispatch({ 
                type: ACTION_AUTH_SLEEP.REJECTED,
                payload: {
                    message: 'Error : cannot connect to api server'
                }
            });
        });
    }, 
    clearMessage: () => (dispatch) => {
        dispatch({
            type: ACTION_AUTH_SLEEP.CLEAR
        })
    }
};

// Debug 
// export const login = (username,password) => (dispatch) => {
//     const data = dispatch({
//         type: 'Login',
//         payload: {
//             username: username,
//             password: password
//         }
//     });
//     console.log(data);
// }







