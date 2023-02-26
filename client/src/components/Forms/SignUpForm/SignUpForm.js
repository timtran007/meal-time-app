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

  return (
    <Form>
        <Form.Group as={Row}>
            <Form.Label htmlFor='name'>
                Name
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
    </Form>
  )
}

export default SignUpForm