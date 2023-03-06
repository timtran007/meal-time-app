import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';

function NewRecipeForm({onSubmitNewRecipe, onCollapseForm}) {
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
        setFormData(initialForm)
        onCollapseForm(false)
    }

    const displayError = errors.map( e => {
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
    })

  return (
    <Form onSubmit={handleSubmit}>
        <Stack gap={3}>
        <Form.Group as={Row} className="mb-3">
            <Col>
                <Form.Label
                    htmlFor='title'
                    className='formLabel'
                >
                    Recipe Title:
                </Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id='title'
                    className='formInputt'
                    name='title'
                    type='input'
                    onChange={handleChange}
                    value={formData.title}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
            <Col>
            <Form.Label
                htmlFor='image_url'
                className='formLabel'
            >
                Recipe Image URL:
            </Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id='image_url'
                    className='formInputt'
                    name='image_url'
                    type='input'
                    onChange={handleChange}
                    value={formData.image_url}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
            <Col>
            <Form.Label
                htmlFor='instructions'
                className='formLabel'
            >
                Recipe Instructions:
            </Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id='instructions'
                    className='formInputt'
                    name='instructions'
                    type='textarea'
                    onChange={handleChange}
                    value={formData.instructions}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
            <Col>
            <Form.Label
                htmlFor='cook_time_in_minutes'
                className='formLabel'
            >
                Cook Time In Minutes:
            </Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id='cook_time_in_minutes'
                    className='formInputt'
                    name='cook_time_in_minutes'
                    type='number'
                    onChange={handleChange}
                    value={formData.cook_time_in_minutes}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
            <Col>
            <Form.Label
                htmlFor='prep_time_in_minutes'
                className='formLabel'
            >
                Prep Time In Minutes:
            </Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id='prep_time_in_minutes'
                    className='formInputt'
                    name='prep_time_in_minutes'
                    type='number'
                    onChange={handleChange}
                    value={formData.prep_time_in_minutes}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Row className="formSubmission">
            <Button
                type='submit'
            >
                Add Recipe
            </Button>
        </Row>
        {displayError}
        </Stack>
    </Form>
  )
}

export default NewRecipeForm