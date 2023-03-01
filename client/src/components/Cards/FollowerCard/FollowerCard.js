import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function FollowerCard({follower}) {
  return (
    <Card>
          <Card.Body>
            <Card.Title>{follower.name}</Card.Title>
            <Card.Img variant="top" src={follower.image_url} />
          </Card.Body>
    </Card>
  )
}

export default FollowerCard