import {Actions} from "./types";

export const rememberPassword = (memPassword:boolean) : Actions => ({
    type: 'rememberPassword',
    checkPassword: memPassword
});

export const send = (login:string, password:string) : Actions => ({
    type: 'send',
    login: login,
    password: password
});

export const success = () : Actions => ({
    type: 'success'
});


export const errorAction = (login: string) : Actions => ({
    type: 'error',
    login: login
})

