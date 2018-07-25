import _ from 'lodash';
import axios from '../../utils/api';

import { defineAction } from 'redux-define';

const App = 'SMARTMORN';

const ACTION_AUTH_ADJUST = defineAction('AUTH_ADJUST', ['PENDING', 'RESOLVED', 'REJECTED','CLEAR'], App);


const initialState = {
    loading: false,
    error: '',
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_AUTH_ADJUST.RESOLVED: 
            return {
                ...state,
                error: false,
                message: action.payload.message
            };
        case ACTION_AUTH_ADJUST.PENDING: 
            return {
                ...state,
               
            }
        case ACTION_AUTH_ADJUST.REJECTED: 
            return {
                ...state,
               
            }
        case ACTION_AUTH_ADJUST.CLEAR: 
            return {
                ...state,
                message: false
            }
        default: return state;
    }
};

export const actions = {
    turnOn: (state) => (dispatch)  => {
        dispatch({
            type: ACTION_AUTH_ADJUST.PENDING
        })
        axios().get('/adjustment/on').then((resp) => {
            if(!resp.data.error) {
                return dispatch({ 
                    type: ACTION_AUTH_ADJUST.RESOLVED,
                    payload: {
                        message: resp.data.message
                    }
                });
                
            } else {
                return dispatch({ 
                    type: ACTION_AUTH_ADJUST.REJECTED,
                    payload: {
                        message: resp.data.message
                    }
                });
            }
        }).catch((error) => {
            return dispatch({ 
                type: ACTION_AUTH_ADJUST.REJECTED,
                payload: {
                    message: 'Error : cannot connect to api server'
                }
            });
        });
    },
    turnOff: (state) => (dispatch)  => {
        dispatch({
            type: ACTION_AUTH_ADJUST.PENDING
        })
        axios().get('/adjustment/off').then((resp) => {
            if(!resp.data.error) {
                return dispatch({ 
                    type: ACTION_AUTH_ADJUST.RESOLVED,
                    payload: {
                        message: resp.data.message
                    }
                });
                
            } else {
                return dispatch({ 
                    type: ACTION_AUTH_ADJUST.REJECTED,
                    payload: {
                        message: resp.data.message
                    }
                });
            }
        }).catch((error) => {
            return dispatch({ 
                type: ACTION_AUTH_ADJUST.REJECTED,
                payload: {
                    message: 'Error : cannot connect to api server'
                }
            });
        });
    },
    clearMessage: () => (dispatch) => {
        dispatch({
            type: ACTION_AUTH_ADJUST.CLEAR
        })
    }
};








