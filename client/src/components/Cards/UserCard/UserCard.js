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
        {/* <Card.Img variant="top" src={user.image_url} className='profileImage'/> */}
        <Image 
          roundedCircle='true' 
          variant="top" 
          src='https://ca.slack-edge.com/T02MD9XTF-U03UFUJS7UH-bd877fb5ef68-512'
          className='profileImage'/>
        <p>{user.name}</p>
        <p>Email: {user.email}</p>
        </Stack>
      </Row>
    </Container> 
  )
}

export default UserCard