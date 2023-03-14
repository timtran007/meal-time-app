import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useState } from 'react';

function ShoppingListCard({shopping_list, onDeleteListIngredient}) {
    const [errors, setErrors] = useState([])

    function handleDelete(e) {
        const ingredientId = e.target.id
        fetch(`/api/ingredients/${ingredientId}`, {
            method: "DELETE"
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(deletedIngredient => onDeleteListIngredient(deletedIngredient))
            } else {
                resp.json().then(error => setErrors(error.errors))
            }
        })
    }

    const displayError = errors.map( e => {
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
      })
    
  return (
    <Container className='containerSpacing'> 
        <Card.Title>
            {shopping_list.name}
        </Card.Title>
        {shopping_list.ingredients.map(ingredient => {
            return(
                <ListGroup 
                    key={ingredient.id} 
                    className='list'
                >
                    <ListGroup.Item className="ingredientList">
                        {ingredient.name} | <Badge bg='info'>{ingredient.category}</Badge> 
                        
                    <Button variant='outline-danger' className='ingredientListDelete' id={ingredient.id} onClick={handleDelete} size="sm">delete</Button>
                    </ListGroup.Item>
                </ListGroup>
            )
        })}
        {displayError}
    </Container>
  )
}

export default ShoppingListCard