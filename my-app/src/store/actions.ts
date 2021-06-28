import {Actions} from "./types";

export const rememberPassword = (memPassword:boolean) : Actions => ({
    type: 'rememberPassword',
    checkPassword: memPassword
});

export const send = () : Actions => ({
    type: 'send'
});

export const success = (login:string, password:string) : Actions => ({
    type: 'success',
    login: login,
    password: password
});


export const logOut = () : Actions => ({
    type: 'logOut'
});

export const errorAction = () : Actions => ({
    type: 'error',
})

