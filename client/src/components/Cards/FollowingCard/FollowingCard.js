import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import UserCard from '../UserCard/UserCard'

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
   
  const followingShip = user.following_ships.find(fs => fs.user_2_id === following.id)

  return (
    <Card>
          <Card.Body>
            <Card.Title>{following.name}</Card.Title>
            <Card.Img variant="top" src={following.image_url} />
            <Button 
              id={following.id}
              onClick={handleUnfollow}>
                unfollow
            </Button>
          </Card.Body>
    </Card>
  )
}

export default FollowingCard