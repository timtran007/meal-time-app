import React from 'react'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'
import { Link } from 'react-router-dom'

function LoginPage({onLogin}) {
  return (
    <div>
        <h2>Log Into Your Account</h2>
        <LoginForm onLogin={onLogin}/>
        <div>
            <p>Don't have an account yet? <Link to='/sign-up'>Sign up here</Link>!</p>
        </div>
    </div>
  )
}

export default LoginPage