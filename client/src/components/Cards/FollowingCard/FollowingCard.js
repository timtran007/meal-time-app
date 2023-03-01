import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function FollowingCard({following}) {
  return (
    <Card>
          <Card.Body>
            <Card.Title>{following.name}</Card.Title>
            <Card.Img variant="top" src={following.image_url} />
          </Card.Body>
    </Card>
  )
}

export default FollowingCard