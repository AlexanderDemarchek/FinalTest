import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Form,FormControl,Label,Input,InputError,Button, InputCheckbox,
    LabelCheckbox,CustomCheckboxWrapper,CustomCheckbox, InputServerError} from "./OnlyForm.styled";
import {Props} from '../App/App';
import {pseudoRequest} from '../../pseudoServer';
import {useHistory} from "react-router-dom";

interface IInputs {
    login: string;
    password: string;
    checkbox: boolean;
}


const OnlyForm: React.FC<Props> = (props) => {
    const { handleSubmit, register, formState: {errors}} = useForm<IInputs>();

    const history = useHistory();

    const onSubmit: SubmitHandler<IInputs> = async(data) => {
        const formData = {...data};
        const {login, password, checkbox} = {...formData};

        const rememberedLogin = checkbox ? login : '';
        const rememberedPassword = checkbox ? password : '';

        props.setLogin(rememberedLogin);
        props.setPassword(rememberedPassword);
        props.setStatus('loading');

        const result = await pseudoRequest(login,password);
        if(result)
        {
            props.setStatus('success');
            localStorage.setItem("login",login);
            history.push("/profile");

        }
        else
        {
            props.setStatus('error');
        }
    }


    return <Form onSubmit ={handleSubmit(onSubmit)}>
        {props.statusContainer === "error" &&
        <InputServerError><div>!</div><p>Неверный логин или пароль!</p></InputServerError>}
        <FormControl>
            <Label>Логин</Label>
            <Input defaultValue={props.loginContainer} inputError={!!errors.login?.message} {...register("login", {
                required: 'Обязательное поле'
            })}/>
            {errors.login?.message && <InputError>{errors.login.message}</InputError>}
        </FormControl>

        <FormControl>
            <Label>Пароль</Label>
            <Input defaultValue={props.passwordContainer} type="password"
                inputError={!!errors.password?.message} {...register("password", {
                required: 'Обязательное поле'
            })}/>
            {errors.password?.message && <InputError>{errors.password.message}</InputError>}
        </FormControl>

        <LabelCheckbox>
            <CustomCheckboxWrapper>
                {props.profileSaver && <CustomCheckbox/>}
            </CustomCheckboxWrapper>
            <p>
                Запомнить пароль?
            </p>
            <InputCheckbox type="checkbox" {...register("checkbox")}
                           defaultChecked={props.profileSaver}
                           onClick = {() => props.saveProfile(!props.profileSaver)}/>
        </LabelCheckbox>

        <FormControl>
            <Button  disabled={props.statusContainer === 'loading'}>Войти</Button>
        </FormControl>
    </Form>
}

export default OnlyForm;