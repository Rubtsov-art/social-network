import React from 'react'
import LoginReduxForm from './LoginForm/LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import style from './Login.module.css'
import { appStateType } from '../../redux/redux-store'

type mapStateToPropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type mapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type loginFormValuesType = {
  loginName: string
  loginPassword: string
  rememberMe: boolean
  captcha: string
}

const Login: React.FC<mapStateToPropsType & mapDispatchPropsType> = ({login, isAuth, captchaUrl}) => {

  const onSubmit = (formData: loginFormValuesType) => {
    login(formData.loginName, formData.loginPassword, formData.rememberMe, formData.captcha)
  }
  
  if (isAuth) {
    return <Redirect to="/profile" />
  }

  return  (
    <section className={style.loginContainer}>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </section>
  )
}

const mapStateToProps = (state: appStateType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login}) (Login)