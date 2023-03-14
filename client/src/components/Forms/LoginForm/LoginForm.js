import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack';
import '../../../App.css'

function LoginForm({onLogin}) {
    const history = useHistory()

    const [errors, setErrors] = useState([])

    const initialFormData = {
        email: '',
        password: '',
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(data => onLogin(data))
                history.push('/profile')
            } else {
                resp.json().then(error => setErrors(error.errors))
            }
        })
        setFormData(initialFormData)
    }

    const displayError = errors.map( e => {
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
    })
  return (
    <Card className="loginForm"> 
    <Form onSubmit={handleSubmit} className="form">
        <Form.Group as={Row} className="signUpFormField">
            <Col xs={3}>
            <Form.Label htmlFor='email' className='formLabel'>
                Email
            </Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id='email'
                    className="formInputt"
                    name='email'
                    type='input'
                    onChange={handleChange}
                    value={formData.email}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="signUpFormField">
            <Col xs={3}>
            <Form.Label htmlFor='password' className='formLabel'>
                Password
            </Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id='password'
                    className="formInputt"
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={formData.password}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <div className='loginButton'>
            <Button
                type='submit'
                className="loginButton" 
                variant="secondary"
                size="lg"
            >
                Login
            </Button>
        </div>
        <div>
            {displayError}
        </div>
    </Form>
    </Card>
  )
}

export default LoginForm