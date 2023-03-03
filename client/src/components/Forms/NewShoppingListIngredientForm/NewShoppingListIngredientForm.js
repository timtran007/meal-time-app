import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function NewShoppingListIngredientForm({shopping_list, onAddNewListIngredient}) {
    const initialFormData = {
        name: '',
        category: 'Select a category...',
        shopping_list_id: shopping_list.id
    }

    const [formData, setFormData] = useState(initialFormData)

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
        fetch('/ingredients', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then( resp => {
            if(resp.ok) {
                resp.json().then(newIngredient => onAddNewListIngredient(newIngredient))
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
        <Row>
            <Col>
                <Form.Control 
                    placeholder="enter item's name..."
                    onChange={handleChange}
                    type='input'
                    name='name'
                    value={formData.name}
                />
            </Col>
            <Col>
                <Form.Select
                    name='category'
                    onChange={handleChange}
                    value={formData.category}
                >
                    <option>Select a category...</option>
                    <option value='meats'>meats</option>
                    <option value='produce'>produce</option>
                    <option value='dairy'>dairy</option>
                    <option value='spices'>spices</option>
                    <option value='baking'>baking</option>
                    <option value='drinks'>drinks</option>
                    <option value='grains'>grains</option>
                    <option value='canned_goods'>canned goods</option>
                </Form.Select>
            </Col>
            <Col>
                <Button
                    variant="secondary"
                    type="submit"
                >
                    add ingredient
                </Button>
            </Col>
            <Row>
                <Col>
                {displayError}
                </Col>
            </Row>
        </Row>
    </Form>
  )
}

export default NewShoppingListIngredientForm