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
        measurement: 'Select a measurement...'
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

    function handleSubmit(e) {
        e.preventDefault()

        //create post request to the end point /recipe_ingredients

        //set state of the response from the post request to recipe

        setFormData(initialForm)
    }

  return (
    <Form onSubmit={handleSubmit}>
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
        <Form.Group as={Row}>
            <Col>
                <Form.Control
                    name='quantity'
                    type='input'
                    onChange={handleChange}
                    value={formData.quantity}
                    placeholder="Enter ingredient's quantity number..."
                >
                </Form.Control>
            </Col>
            <Col>
            <Form.Select
                    name='measurement'
                    onChange={handleChange}
                    value={formData.measurement}
                >
                    <option>Select a measurement...</option>
                    <option value='cup/cups'>cup/cups</option>
                    <option value='ounce/ounces'>ounce/ounces</option>
                    <option value='tablespoon/tablespoons'>tablespoon/tablespoons</option>
                    <option value='teaspoon/teaspoons'>teaspoon/teaspoons</option>
                    <option value='quart/quarts'>quart/quarts</option>
                </Form.Select>
            </Col>
        </Form.Group>
        <div>
            <Button
                type="submit"
            >
                Add ingredient
            </Button>
        </div>
    </Form>
  )
}

export default NewRecipeIngredientForm