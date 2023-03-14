import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

function SignUpForm({onSignup}) {
    const history = useHistory()

    const [errors, setErrors] = useState([])

    const initialFormData = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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
        fetch('/api/signup', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(data => onSignup(data))
                history.push('/profile')
            }else{
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
    <Card className="signUpForm">
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="signUpFormField">
            <Form.Label htmlFor='name' column="lg" xs={4} className="formLabel">
                Name:
            </Form.Label>
            <Col>
                <Form.Control
                    id='name'
                    name='name'
                    type='input'
                    onChange={handleChange}
                    value={formData.name}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="signUpFormField">
            <Form.Label htmlFor='email' column="lg" xs={4} className="formLabel">
                Email:
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
        <Form.Group as={Row} className="signUpFormField">
            <Form.Label htmlFor='password' column="lg" xs={4} className="formLabel">
                Password:
            </Form.Label>
            <Col>
                <Form.Control
                    id='password'
                    name='password'
                    type='input'
                    onChange={handleChange}
                    value={formData.password}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="signUpFormField">
            <Form.Label htmlFor='password_confirmation' column="lg" xs={4} className="formLabel">
                Password Confirmation:
            </Form.Label>
            <Col>
                <Form.Control
                    id='password_confirmation'
                    name='password_confirmation'
                    type='input'
                    onChange={handleChange}
                    value={formData.password_confirmation}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <div>
            <Button
                type='submit'
                className="loginButton"
                variant="secondary"
                size="lg"
            >
                Sign up
            </Button>
        </div>
        <div>
            {displayError}
        </div>
    </Form>
    </Card>
  )
}

export default SignUpForm