import React from 'react'
import style from '../Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../FormControl/FormControl'
import { required } from '../../../validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginFormField}>
            <Field component={Input} type={'text'} placeholder={'login'} validate={[required]} name={'loginName'}/>
            <Field component={Input} type={'password'} placeholder={'password'} validate={[required]} name={'loginPassword'}/>
            <Field component={Input} type={'checkbox'} name={'rememberMe'} />
            <label for={'rememberMe'}>Remember Me</label>
            <button>Submit</button>
        </form>
    )
};

const loginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm)

export default loginReduxForm