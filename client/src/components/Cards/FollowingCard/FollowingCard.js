import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'

function FollowingCard({following, user, onDeleteFollowingShip}) {
  const [errors, setErrors] = useState([])
  const f = user.following
  
  function handleUnfollow(e) {
    //write delete request from the end point '/following_ships/:id'
    const followingShipId = user.following_ships.find(fs => fs.user_2_id === following.id).id
    fetch(`/following_ships/${followingShipId}`,{
      method: "DELETE"
    })
    .then( resp => {
      if(resp.ok){
        resp.json().then(deletedFollowingShip => onDeleteFollowingShip(deletedFollowingShip))
      } else {
        resp.json().then(error => setErrors(error.errors))
      }
    })
  }

  return (
    <Card className='profileCard'>
          <Card.Body>
            <Stack direction='horizontal' gap={5}>
            <Image 
              roundedCircle='true' 
              src={following.image_url} 
              className='profileImage'
            />
            <Card.Title>{following.name}</Card.Title>
            <Button 
              size='sm'
              variant='outline-primary'
              id={following.id}
              onClick={handleUnfollow}>
                unfollow
            </Button>
            </Stack>
          </Card.Body>
    </Card>
  )
}

export default FollowingCard