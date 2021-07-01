import {StateApp, Actions} from './types'

const initialState:StateApp = {
    status: 'auth',
    checkPassword: false,
    login: '',
    password: ''
};

export const reducer = (state = initialState,action:Actions) => {
    switch (action.type){
        case 'send':
            return {
                ...state,
                status: 'loading',
                login: action.login,
                password: action.password
            };
        case "rememberPassword":
            return {
                ...state,
                checkPassword: action.checkPassword
            };
        case "success":
            return {
                ...state,
                status: 'success'
            }
        case "error":
            return {
                ...state,
                status: 'error',
                login: action.login
            }
        default:
            return state;
    }

};

