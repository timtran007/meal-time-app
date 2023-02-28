import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function UserCard({user}) {
  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={user.image_url} />
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>Email: {user.email}</Card.Text>
      </Card.Body>
    </Card> 
  )
}

export default UserCard