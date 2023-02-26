import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function LoginForm() {
  return (
    <Form>
        <Form.Group as={Row} className={formField}>
            <Form.Label
                htmlFor='email'
            >
                Email:
            </Form.Label>
            <Col>
                <Form.Control
                    name='email'
                    type='input'
                    onChange={() => {}}
                    value={formData}
                >
                    
                </Form.Control>
            </Col>
        </Form.Group>
    </Form>
  )
}

export default LoginForm