import {StateApp, Actions} from './types'

const initialState:StateApp = {
    status: 'auth',
    checkPassword: true,
    login: '',
    password: ''
};

export const reducer = (state = initialState,action:Actions) => {
    switch (action.type){
        case 'send':
            return {
                ...state,
                status: 'loading'
            };
        case "rememberPassword":
            return {
                ...state,
                checkPassword: action.checkPassword
            };
        case "logOut":
            return{
                ...state,
                status: 'auth'
            }
        case "success":
            return {
                ...state,
                status: 'success',
                login: action.login,
                password: action.password
            }
        case "error":
            return {
                ...state,
                status: 'error'
            }
        default:
            return state;
    }

};

