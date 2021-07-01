import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {Form,FormControl,Label,Input,InputError,Button, InputCheckbox,
    LabelCheckbox,CustomCheckboxWrapper,CustomCheckbox, InputServerError} from "./OnlyForm.styled";
import {pseudoRequest} from '../../pseudoServer';
import {getRootState} from "../../store/selectors";
import {errorAction, rememberPassword, send, success} from "../../store/actions";
import store from "../../store/store";
import {useHistory} from "react-router-dom";

interface IInputs {
    login: string;
    password: string;
    checkbox: boolean;
}


const OnlyForm: React.FC = () => {
    const { handleSubmit, register, formState: {errors}} = useForm<IInputs>();

    const history = useHistory();

    const stateApp = useSelector(getRootState);

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<IInputs> = async(data) => {
        const formData = {...data};
        const {login, password,checkbox} = {...formData};

        const sendLogin = checkbox ? login : '';
        const sendPassword = checkbox ? password : '';

        dispatch(send(sendLogin,sendPassword))

        const result = await pseudoRequest(login,password);
        if(result)
        {
            dispatch(success());
            history.push("/profile");

        }
        else
        {
            dispatch(errorAction(login));
        }
    }


    return <Form onSubmit ={handleSubmit(onSubmit)}>
        {stateApp.status == "error" &&
        <InputServerError><div>!</div><p>Пользователя {stateApp.login} не существует!</p></InputServerError>}
        <FormControl>
            <Label>Логин</Label>
            <Input defaultValue={stateApp.login} inputError={!!errors.login?.message} {...register("login", {
                required: 'Обязательное поле'
            })}/>
            {errors.login?.message && <InputError>{errors.login.message}</InputError>}
        </FormControl>

        <FormControl>
            <Label>Пароль</Label>
            <Input defaultValue={stateApp.password} inputError={!!errors.password?.message} {...register("password", {
                required: 'Обязательное поле'
            })}/>
            {errors.password?.message && <InputError>{errors.password.message}</InputError>}
        </FormControl>

        <LabelCheckbox>
            <CustomCheckboxWrapper>
                {stateApp.checkPassword && <CustomCheckbox/>}
            </CustomCheckboxWrapper>
            <p>
                Запомнить пароль?
            </p>
            <InputCheckbox type="checkbox" {...register("checkbox")}
                           defaultChecked={stateApp.checkPassword}
                           onClick={( ) => {dispatch(rememberPassword(!stateApp.checkPassword));
                           console.log(stateApp);}}/>
        </LabelCheckbox>

        <FormControl>
            <Button  disabled={stateApp.status === 'loading'}>Войти</Button>
        </FormControl>
    </Form>
}

export default OnlyForm;