import React from 'react'
import LoginReduxForm from './LoginForm/LoginForm'

const onSubmit = (formData) => {
  console.log(formData)
}

const Login = (props) => {
  return  (
    <section>
        <LoginReduxForm onSubmit={onSubmit} />
    </section>
  )
}

export default Login