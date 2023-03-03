import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function NewShoppingListForm({onSubmitNewList}) {

    const [formDataName, setFormDataName] = useState('')
    const [errors, setErrors] = useState([])

    function handleChange(e) {
        setFormDataName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/shopping_lists', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataName)
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(newShoppingList => onSubmitNewList(newShoppingList))
            } else {
                resp.json().then(error => error.errors)
            }
        })
        setFormDataName('')
    }

    const displayError = errors.map( e => {
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
    })

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
        {displayError}
    </Form>
  )
}

export default NewShoppingListForm