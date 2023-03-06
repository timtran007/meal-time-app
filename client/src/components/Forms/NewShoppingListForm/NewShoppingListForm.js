import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function NewShoppingListForm({onSubmitNewList, onAddListState}) {

    const [formData, setFormData] = useState({name: ''})
    const [errors, setErrors] = useState([])

    function handleChange(e) {
        const value = e.target.value
        setFormData({
            name: `${value}`
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch('/shopping_lists', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(newShoppingList => onSubmitNewList(newShoppingList))
            } else {
                resp.json().then(error => setErrors(error.errors))
            }
        })
        setFormData({name: ''})
        onAddListState(false)
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
                    value={formData.name}
                >
                </Form.Control>
            </Col>
            <Col>
                <Button
                    type='submit'
                >
                    Add New List
                </Button>
            </Col>
        </Row>
        <div>
        {displayError}
        </div>
    </Form>
  )
}

export default NewShoppingListForm