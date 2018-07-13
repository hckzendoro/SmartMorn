import _ from 'lodash';
import axios from '../../utils/api';

import { defineAction } from 'redux-define';

const App = 'SMARTMORN';

const ACTION_AUTH_DASH = defineAction('AUTH_DASH', ['PENDING', 'RESOLVED', 'REJECTED','CLEAR'], App);
console.log(ACTION_AUTH_DASH);

const initialState = {
    loading: false,
    error: '',
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_AUTH_DASH.RESOLVED: 
            return {
                ...state,
                error: false,
                message: action.payload.message
            };
        case ACTION_AUTH_DASH.PENDING: 
            return {
                ...state,
               
            }
        case ACTION_AUTH_DASH.REJECTED: 
            return {
                ...state,
               
            }
        case ACTION_AUTH_DASH.CLEAR: 
            return {
                ...state,
                message: false
            }
        default: return state;
    }
};

export const actions = {
    getData: (state) => (dispatch)  => {
        dispatch({
            type: ACTION_AUTH_DASH.PENDING
        })
        axios().post('/users/login',{
            username: username,
            password: password
        }).then((resp) => {
            if(!resp.data.error) {
                window.localStorage.setItem('SmartMornKey', resp.data.token);
                return dispatch({ 
                    type: ACTION_AUTH_DASH.RESOLVED,
                    payload: {
                        message: false
                    }
                });
                
            } else {
                return dispatch({ 
                    type: ACTION_AUTH_DASH.REJECTED,
                    payload: {
                        message: resp.data.message
                    }
                });
            }
        }).catch((error) => {
            return dispatch({ 
                type: ACTION_AUTH_DASH.REJECTED,
                payload: {
                    message: 'Error : cannot connect to api server'
                }
            });
        });
    },
    clearMessage: () => (dispatch) => {
        dispatch({
            type: ACTION_AUTH_DASH.CLEAR
        })
    }
};








