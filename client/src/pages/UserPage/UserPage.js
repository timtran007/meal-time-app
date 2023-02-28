import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import UserCard from '../../components/Cards/UserCard/UserCard'

function UserPage({user}) {
  console.log("user_page", user)

  const displayFollowers = user ? user.followers.map(follower  => {
    return(
      <Card key={follower.id}>
          <Card.Body>
            <Card.Title>{follower.name}</Card.Title>
            <Card.Img variant="top" src={follower.image_url} />
          </Card.Body>
        </Card>
    )
  }): "loading"

  const displayFollowings = user ? user.following.map(following  => {
      return(
        <Card key={following.id}>
          <Card.Body>
            <Card.Title>{following.name}</Card.Title>
            <Card.Img variant="top" src={following.image_url} />
          </Card.Body>
          <Button>unfollow</Button>      
        </Card>
      )
      }): "loading"

  //write delete request for following_ship with endpoint '/following_ships/:user_2_id'

  return (
    <div>
      <h2>My Profile</h2>
      { user ? <UserCard user={user}/>: "loading"}
      <h3>Followers</h3>
        {displayFollowers}
      <h3>Following</h3>
        {displayFollowings}
    </div>
  )
}

export default UserPage