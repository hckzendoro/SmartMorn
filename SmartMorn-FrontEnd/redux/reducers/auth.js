import _ from 'lodash';
import axios from '../../utils/api';

import { defineAction } from 'redux-define';

const App = 'SMARTMORN';

const ACTION_AUTH_LOGIN = defineAction('AUTH_LOGIN', ['PENDING', 'RESOLVED', 'REJECTED','CLEAR'], App);
const ACTION_AUTH_REGISTER = defineAction('AUTH_REGISTER', ['PENDING', 'RESOLVED', 'REJECTED','CLEAR'], App);

const initialState = {
    isLogin: false,
    loading: false,
    messageLogin: '',
    messageRegister: '',
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_AUTH_LOGIN.RESOLVED: 
            return {
                ...state,
                isLogin: !state.isLogin,
                loading: false,
                messageLogin: action.payload.message
            };
        case ACTION_AUTH_LOGIN.PENDING: 
            return {
                ...state,
                loading: !state.loading
            }
        case ACTION_AUTH_LOGIN.REJECTED: 
            return {
                ...state,
                loading: !state.loading,
                messageLogin: action.payload.message
            }
        case ACTION_AUTH_REGISTER.REJECTED: 
            return {
                ...state,
                loading: !state.loading,
                messageRegister: action.payload.message,
                error: true
            }
        case ACTION_AUTH_REGISTER.PENDING: 
            return {
                ...state,
                loading: !state.loading
            }
        case ACTION_AUTH_REGISTER.RESOLVED: 
            return {
                ...state,
                messageRegister: action.payload.message,
                error: false,
            }
        case ACTION_AUTH_REGISTER.CLEAR: 
            return {
                ...state,
                messageRegister: false,
                error: false,
            }
        case ACTION_AUTH_LOGIN.CLEAR: 
            return {
                ...state,
                messageLogin: false,
                error: false,
            }
        default: return state;
    }
};

export const actions = {
    Login: (username, password) => (dispatch)  => {
        dispatch({
            type: ACTION_AUTH_LOGIN.PENDING
        })
        axios().post("/users/login",{
            username: username,
            password: password
        }).then((resp) => {
            if(!resp.data.error) {
                window.localStorage.setItem('SmartMornKey', resp.data.token);
                return dispatch({ 
                    type: ACTION_AUTH_LOGIN.RESOLVED,
                    payload: {
                        message: false
                    }
                });
                
            } else {
                
                return dispatch({ 
                    type: ACTION_AUTH_LOGIN.REJECTED,
                    payload: {
                        message: resp.data.message
                    }
                });
            }
        }).catch((error) => {
            console.log(error);
            return dispatch({ 
                type: ACTION_AUTH_LOGIN.REJECTED,
                payload: {
                    message: 'Error : cannot connect to api server'
                }
            });
        });
    }, 
    Register: (state) => (dispatch) => {
        
        if(state.password != state.confirmPassword) {
            return dispatch({ 
                type: ACTION_AUTH_REGISTER.REJECTED,
                payload: {
                    message: 'Password not Match'
                }
            });
        }
        dispatch({
            type: ACTION_AUTH_REGISTER.PENDING
        })
        axios().post('/users/register',{
            username: state.username,
            password: state.password,
            birthday: state.birthday,
            gender: state.gender
        }).then((resp) => {
            if(!resp.data.error) {
                return dispatch({ 
                    type: ACTION_AUTH_REGISTER.RESOLVED,
                    payload: {
                        message: resp.data.message,

                    }
                });
                
            } else {
                return dispatch({ 
                    type: ACTION_AUTH_REGISTER.REJECTED,
                    payload: {
                        message: resp.data.message
                    }
                });
            }
        }).catch((error) => {
            return dispatch({ 
                type: ACTION_AUTH_REGISTER.REJECTED,
                payload: {
                    message: 'Error : cannot connect to api server'
                }
            });
        });
    },
    clearMessageLogin: () => (dispatch) => {
        dispatch({
            type: ACTION_AUTH_LOGIN.CLEAR
        })
    },
    clearMessageRegister: () => (dispatch) => {
        dispatch({
            type: ACTION_AUTH_REGISTER.CLEAR
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







