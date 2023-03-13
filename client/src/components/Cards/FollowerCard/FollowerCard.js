import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

function FollowerCard({follower}) {
  return (
    <Card className='profileCard'>
      <Card.Body>
        <Stack direction='horizontal' gap={5}>
        <Image 
          roundedCircle='true' 
          src={follower.image_url} 
          className='profileImage'
        />
        <Card.Title>{follower.name}</Card.Title>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default FollowerCard