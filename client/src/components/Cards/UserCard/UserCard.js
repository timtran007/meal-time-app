import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

function UserCard({user}) {
  return (
    <Container className='spacing'>
      <Row>
        <Stack direction='horizontal' gap={5} >
        <Image 
          roundedCircle='true' 
          variant="top" 
          src={user.image_url}
          className='profileImage'/>
        <p>{user.name}</p>
        <p>Email: {user.email}</p>
        </Stack>
      </Row>
    </Container> 
  )
}

export default UserCard