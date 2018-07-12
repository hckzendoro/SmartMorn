import _ from 'lodash';
import axios from '../../utils/api';

import { defineAction } from 'redux-define';

const ACTION_AUTH = defineAction('AUTH', ['LOGIN','PENDING', 'RESOLVED', 'REJECTED'], 'SMARTMORN');
console.log(ACTION_AUTH);
const initialState = {
    isLogin: false,
    loading: false,
    errorMessage: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_AUTH.RESOLVED: 
            return {
                ...state,
                isLogin: !state.isLogin,
                loading: !state.loading
            };
        case ACTION_AUTH.PENDING: 
            return {
                ...state,
                loading: !state.loading
            }
        case ACTION_AUTH.REJECTED: 
            return {
                ...state,
                loading: !state.loading,
                errorMessage: action.payload.message
            }
        default: return state;
    }
};

export const actions = {
    Login: (username, password) => (dispatch)  => {
        dispatch({
            type: ACTION_AUTH.PENDING
        })
        axios().post('/users/login',{
            username: username,
            password: password
        }).then((resp) => {
            if(!resp.data.error) {
                return dispatch({ 
                    type: ACTION_AUTH.RESOLVED
                });
            } else {
                return dispatch({ 
                    type: ACTION_AUTH.REJECTED,
                    payload: {
                        message: resp.data.messagea
                    }
                });
            }
        }).catch((error) => {
            return dispatch({ 
                type: ACTION_AUTH.REJECTED,
                payload: {
                    message: 'error : cannot connect to api server'
                }
            });
        })
       
    },
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







