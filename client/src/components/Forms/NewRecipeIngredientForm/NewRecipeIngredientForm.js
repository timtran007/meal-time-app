import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function NewRecipeIngredientForm() {
    const initialForm = {
        name: '',
        category: 'Select a category...',
        quantity: '',
        measurment: 'Select a measurement...'
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
        <Form.Group as={Row}>
            <Col>
                <Form.Control
                    name='name'
                    type='input'
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Enter ingredient's name..."
                >
                </Form.Control>
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
        </Form.Group>
    </Form>
  )
}

export default NewRecipeIngredientForm