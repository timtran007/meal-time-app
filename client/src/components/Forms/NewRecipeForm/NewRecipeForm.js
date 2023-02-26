import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function NewRecipeForm() {
    const initialForm = {
        title: '',
        image_url: '',
        instructions: '',
        cook_time_in_minutes: 0,
        prep_time_in_minutes: 0,
        likes: 0,
    }

    const [formData, setFormData] = useState(initialForm)

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
        <Form.Control as={Row}>
            <Form.Label
                htmlFor='title'
            >
                Recipe Title:
            </Form.Label>
            <Col>
                <Form.Control
                    id='title'
                    name='title'
                    type='input'
                    onChange={handleChange}
                    value={formData.title}
                >
                </Form.Control>

            </Col>
        </Form.Control>
    </Form>
  )
}

export default NewRecipeForm