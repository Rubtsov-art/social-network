import React from 'react'
import LoginReduxForm from './LoginForm/LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'



const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.loginName, formData.loginPassword, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to="/profile" />
  }

  return  (
    <section>
        <LoginReduxForm onSubmit={onSubmit} />
    </section>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)