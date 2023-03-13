import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

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
    <Form 
        onSubmit={handleSubmit}
        className='addForm'
    >
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
                    as='input'
                    id='title'
                    name='title'
                    type='input'
                    onChange={handleChange}
                    value={formData.title}
                    className='inputField'
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
                    as='input'
                    id='image_url'
                    name='image_url'
                    type='input'
                    onChange={handleChange}
                    value={formData.image_url}
                    className='inputField'
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
                    as='textarea'
                    rows={5}
                    id='instructions'
                    name='instructions'
                    type='textarea'
                    onChange={handleChange}
                    value={formData.instructions}
                    className='inputField'
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
                    name='cook_time_in_minutes'
                    type='number'
                    onChange={handleChange}
                    value={formData.cook_time_in_minutes}
                    className='inputField'
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
                    name='prep_time_in_minutes'
                    type='number'
                    onChange={handleChange}
                    value={formData.prep_time_in_minutes}
                    className='inputField'
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <div>
            <Button
                type='submit'
                size='sm'
                variant='secondary'
            >
                Add
            </Button>
        </div>
        {displayError}
        </Stack>
    </Form>
  )
}

export default NewRecipeForm