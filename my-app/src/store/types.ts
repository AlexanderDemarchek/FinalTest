
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
}

interface SendAction{
    type: 'send';
}

interface SuccessAction{
    type: 'success';
    login:string;
    password:string;
}

interface LogOutAction{
    type: 'logOut';
}

export type Actions = SendAction
    |LogOutAction
    |RememberPasswordAction
    |SuccessAction
    |ErrorAction;