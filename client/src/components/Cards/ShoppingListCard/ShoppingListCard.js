import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

function ShoppingListCard({shopping_list}) {
  return (
    <Card>
        <Card.Title>
            {shopping_list.name}
        </Card.Title>
        {shopping_list.ingredients.map(ingredient => {
            return(
                <ListGroup key={ingredient.id}>
                    <ListGroup.Item>
                        <div>
                            {ingredient.name}
                        </div>
                        <Badge>
                            {ingredient.category}
                        </Badge>
                    
                    </ListGroup.Item>
                </ListGroup>
                
            )
        })}
    </Card>
  )
}

export default ShoppingListCard