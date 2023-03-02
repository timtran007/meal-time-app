import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function EditRecipeForm({recipe, onSubmitEditRecipe}) {
    const initialForm = {
        title: recipe.title,
        image_url: recipe.image_url,
        instructions: recipe.instructions,
        cook_time_in_minutes: recipe.cook_time_in_minutes,
        prep_time_in_minutes: recipe.prep_time_in_minutes,
        likes: recipe.likes,
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
        fetch(`/recipes/${recipe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(editedRecipe => onSubmitEditRecipe(editedRecipe))
            } else {
                resp.json().then(error => setErrors(error.errors))
            }
        })

        setFormData(initialForm)
    }

    const displayError = errors.map( e => {
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
    })

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
                Edit
            </Button>
        </div>
        <div>
            {displayError}
        </div>
    </Form>
  )
}

export default EditRecipeForm