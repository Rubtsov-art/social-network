import React from 'react'
import style from '../Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../FormControl/FormControl';
import { required } from '../../../validators/validators';
import formsStyle from '../../FormControl/FormControl.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginFormField}>
            <Field component={Input} type={'text'} placeholder={'login'} validate={[required]} name={'loginName'}/>
            <Field component={Input} type={'password'} placeholder={'password'} validate={[required]} name={'loginPassword'}/>
            <Field component={Input} type={'checkbox'} name={'rememberMe'} />
            <label for={'rememberMe'}>Remember Me</label>
            {props.error && <div className={formsStyle.invalidFormData}>{props.error}</div>}
            <button>Submit</button>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field component={Input} type={'text'} placeholder={'write symbols'} validate={[required]} name={'captcha'}/>}
        </form>
    )
};

const loginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm)

export default loginReduxForm