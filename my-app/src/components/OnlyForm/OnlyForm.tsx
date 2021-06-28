import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {Form,FormControl,Label,Input,InputError,Button, InputCheckbox,LabelCheckbox,CustomCheckboxWrapper,CustomCheckbox} from "./OnlyForm.styled";
import {pseudoRequest} from '../../pseudoServer';
import {getRootState} from "../../store/selectors";
import {errorAction, rememberPassword, send, success} from "../../store/actions";

interface IInputs {
    login: string;
    password: string;
    checkbox: boolean;
}


const OnlyForm: React.FC = () => {
    const { handleSubmit, register, formState: {errors}} = useForm<IInputs>();

    const state = useSelector(getRootState);

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<IInputs> = async (data) => {
        const formData = {...data};
        const {login, password,checkbox} = {...formData};

        dispatch(send());

        const result = await pseudoRequest(login,password);
        if(result)
        {
            if(checkbox)dispatch(success('steve.jobs@example.com','password'));
            window.location.href = '/profile';
        }
        else
        {
            dispatch(errorAction());
        }
    }


    return <Form onSubmit ={handleSubmit(onSubmit)}>
        {state.status == "error" && <Input defaultValue={"Ошибка!"}/>}
        <FormControl>
            <Label>Логин</Label>
            <Input defaultValue={state.login} inputError={!!errors.login?.message} {...register("login", {
                required: 'Обязательное поле'
            })}/>
            {errors.login?.message && <InputError>{errors.login.message}</InputError>}
        </FormControl>

        <FormControl>
            <Label>Пароль</Label>
            <Input defaultValue={state.password} inputError={!!errors.password?.message} {...register("password", {
                required: 'Обязательное поле'
            })}/>
            {errors.password?.message && <InputError>{errors.password.message}</InputError>}
        </FormControl>

        <LabelCheckbox>
            <CustomCheckboxWrapper>
                {state.checkPassword && <CustomCheckbox/>}
            </CustomCheckboxWrapper>
            <p>
                Запомнить пароль?
            </p>
            <InputCheckbox type="checkbox" {...register("checkbox")}
                           onClick={() => dispatch(rememberPassword(!state.checkPassword))}/>
        </LabelCheckbox>

        <FormControl>
            <Button  disabled={state.status === 'loading'}>Войти</Button>
        </FormControl>
    </Form>
}

export default OnlyForm;