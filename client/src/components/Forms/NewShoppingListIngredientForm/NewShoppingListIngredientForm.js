import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function NewShoppingListIngredientForm() {
    const initialFormData = {
        name: '',
        category: 'Select a category...'
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
        setFormData(initialFormData)
    }

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
        </Row>
    </Form>
  )
}

export default NewShoppingListIngredientForm