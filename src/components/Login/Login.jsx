import React from 'react'
import LoginReduxForm from './LoginForm/LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'


const Login = ({login, isAuth, captchaUrl}) => {

  const onSubmit = (formData) => {
    login(formData.loginName, formData.loginPassword, formData.rememberMe, formData.captcha)
  }
  
  if (isAuth) {
    return <Redirect to="/profile" />
  }

  return  (
    <section>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </section>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login}) (Login)