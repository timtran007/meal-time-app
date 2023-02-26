import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function SignUpForm() {
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
        //write post request with end point of '/signup'

        //set state of user to response give back to request

        setFormData(initialFormData)
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
            <Form.Label htmlFor='name'>
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
        <Form.Group as={Row}>
            <Form.Label htmlFor='email'>
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
        <Form.Group as={Row}>
            <Form.Label htmlFor='password'>
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
        <Form.Group as={Row}>
            <Form.Label htmlFor='password_confirmation'>
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
            >
                Sign up
            </Button>
        </div>
    </Form>
  )
}

export default SignUpForm