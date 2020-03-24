import React from 'react'
import style from '../Login.module.css';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginFormField}>
            <Field component={'input'} type={'text'} placeholder={'login'} name={'loginName'}/>
            <Field component={'input'} type={'password'} placeholder={'password'} name={'loginPassword'}/>
            <Field component={'input'} type={'checkbox'} name={'rememberMy'} />
            <label for={'rememberMy'}>Remember My</label>
            <button>Submit</button>
        </form>
    )
};

const loginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm)

export default loginReduxForm