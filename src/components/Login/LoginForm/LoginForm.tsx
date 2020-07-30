import React from 'react'
import style from './LoginForm.module.css';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { Input } from '../../FormControl/FormControl';
import { required } from '../../../validators/validators';
import formsStyle from '../../FormControl/FormControl.module.css';
import { loginFormValuesType } from '../Login';

type loginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<loginFormValuesType, loginFormOwnProps> & loginFormOwnProps>= (props) => {
    return (
        <>
        <form onSubmit={props.handleSubmit} className={style.loginFormField}>
            <Field className={style.formInput} component={Input} type={'text'} placeholder={'login'} validate={[required]} name={'loginName'}/>
            <Field className={style.formInput} component={Input} type={'password'} placeholder={'password'} validate={[required]} name={'loginPassword'}/>
            <div className={style.rememberMeContainer}>
                <Field className={style.formInput} component={Input} type={'checkbox'} name={'rememberMe'} />
                <label className={style.rememberMe} htmlFor ={'rememberMe'}>Remember Me</label>
            </div>
            {props.error && <div className={formsStyle.invalidFormData}>{props.error}</div>}
            <button className={style.submit}>Submit</button>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field component={Input} type={'text'} placeholder={'write symbols'} validate={[required]} name={'captcha'}/>}
        </form>
        <aside className={style.testText}>
            <p>If you want to try using a social network, please use the test login and password</p>
            <p>Login: free@samuraijs.com</p>
            <p>Password: free</p>
        </aside>
        </>
    )
};

const loginReduxForm = reduxForm<loginFormValuesType, loginFormOwnProps> ({
    form: 'login'
}) (LoginForm)

export default loginReduxForm