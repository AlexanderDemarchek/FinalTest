
export interface StateApp{
    status:string;
    checkPassword: boolean;
    login: string;
    password: string;
}

interface RememberPasswordAction {
    type: 'rememberPassword';
    checkPassword: boolean;
}

interface ErrorAction{
    type: 'error';
    login: string;
}

interface SendAction{
    type: 'send';
    login:string;
    password:string;
}

interface SuccessAction{
    type: 'success';
}


export type Actions = SendAction
    |RememberPasswordAction
    |SuccessAction
    |ErrorAction;