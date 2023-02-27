import React from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from '../../../src/components/Forms/SignUpForm/SignUpForm'

function SignupPage({onSignup}) {
  return (
    <div>
        <h2>Sign Up For an Account</h2>
        <SignUpForm onSignup={onSignup} />
        <div>
            <p>Already have an account? <Link to='/login'>Login here</Link>!</p>
        </div>
    </div>

  )
}

export default SignupPage