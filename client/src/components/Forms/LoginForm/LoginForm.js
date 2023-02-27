import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

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
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
            <Form.Label htmlFor='email'>
                Email
            </Form.Label>
            <Col>
                <Form.Control
                    id='email'
                    name='email'
                    type='input'
                    onChange={handleChange}
                    value={formData.email}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row}>
            <Form.Label htmlFor='password'>
                Password
            </Form.Label>
            <Col>
                <Form.Control
                    id='password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={formData.password}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <div>
            <Button
                type='submit'
            >
                Login
            </Button>
        </div>
        <div>
            {displayError}
        </div>
    </Form>
  )
}

export default LoginForm