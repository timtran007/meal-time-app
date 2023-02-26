import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function NewShoppingListForm() {

    const [formDataName, setFormDataName] = useState('')

    function handleChange(e) {
        setFormDataName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        //create post request with endpoint '/shopping_lists'

        //set state for of the user

        setFormDataName('')
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Row>
            <Form.Label
                htmlFor='name'
            >
                Shopping List's Name: 
            </Form.Label>
            <Col>
                <Form.Control
                    type='input'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    value={formDataName}
                >
                </Form.Control>
            </Col>
            <Col>
                <Button
                    type='submit'
                >
                    Add List
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default NewShoppingListForm