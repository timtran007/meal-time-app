import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function NewRecipeForm({showFormState, onSubmitNewRecipe, onCollapseForm}) {
    const initialForm = {
        title: '',
        image_url: '',
        instructions: '',
        cook_time_in_minutes: 0,
        prep_time_in_minutes: 0,
        likes: 0,
    }

    const [formData, setFormData] = useState(initialForm)

    const [errors, setErrors] = useState([])

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
        fetch('/recipes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(newRecipe => onSubmitNewRecipe(newRecipe))
            } else {
                resp.json().then(error => setErrors(error.errors))
            }
        })
        
        onCollapseForm(false)
    }

  return (
    <Form onSubmit={handleSubmit}>
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
        <Form.Control as={Row}>
            <Form.Label
                htmlFor='image_url'
            >
                Recipe Image URL:
            </Form.Label>
            <Col>
                <Form.Control
                    id='image_url'
                    name='image_url'
                    type='input'
                    onChange={handleChange}
                    value={formData.image_url}
                >
                </Form.Control>
            </Col>
        </Form.Control>
        <Form.Control as={Row}>
            <Form.Label
                htmlFor='instructions'
            >
                Recipe Instructions:
            </Form.Label>
            <Col>
                <Form.Control
                    id='instructions'
                    name='instructions'
                    type='textarea'
                    onChange={handleChange}
                    value={formData.instructions}
                >
                </Form.Control>
            </Col>
        </Form.Control>
        <Form.Control as={Row}>
            <Form.Label
                htmlFor='cook_time_in_minutes'
            >
                Cook Time In Minutes:
            </Form.Label>
            <Col>
                <Form.Control
                    id='cook_time_in_minutes'
                    name='cook_time_in_minutes'
                    type='number'
                    onChange={handleChange}
                    value={formData.cook_time_in_minutes}
                >
                </Form.Control>
            </Col>
        </Form.Control>
        <Form.Control as={Row}>
            <Form.Label
                htmlFor='prep_time_in_minutes'
            >
                Prep Time In Minutes:
            </Form.Label>
            <Col>
                <Form.Control
                    id='prep_time_in_minutes'
                    name='prep_time_in_minutes'
                    type='number'
                    onChange={handleChange}
                    value={formData.prep_time_in_minutes}
                >
                </Form.Control>
            </Col>
        </Form.Control>
        <div>
            <Button
                type='submit'
            >
                Add Recipe
            </Button>
        </div>
    </Form>
  )
}

export default NewRecipeForm