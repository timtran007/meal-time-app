import React from 'react'
import UserCard from '../../components/Cards/UserCard/UserCard'
import FollowerCard from '../../components/Cards/FollowerCard/FollowerCard'
import FollowingCard from '../../components/Cards/FollowingCard/FollowingCard'
import Carousel from 'react-bootstrap/Carousel'

function UserPage({user, followers, following, onDeleteFollowingShip}) {

  return (
    <div className='spacing'>
      <h2>My Profile</h2>
      { user ? <UserCard user={user}/>: "loading"}
      <div className='spacing'>
      <h3>Following ({following ? following.length : null})</h3>
      <Carousel 
        interval={null} 
        variant="dark"
      >
        { following ? following.map(f  => {
          return(
            <Carousel.Item>
            <div key={f.id} className='spacing'>
              <FollowingCard user={user} following={f} onDeleteFollowingShip={onDeleteFollowingShip}/>
            </div>
            </Carousel.Item>
          )
        }) : null}
      </Carousel>
      </div>
      <div >
      <h3>Followers ({ followers ? followers.length: null})</h3>
      <Carousel 
        interval={null} 
        variant="dark"
      >
        {followers ? followers.map(follower  => {
          return(
            <Carousel.Item>
            <div key={follower.id} className='spacing'>
            <FollowerCard follower={follower}/>
            </div>
            </Carousel.Item>
          )
        }): null}
        </Carousel>
      </div>
    </div>
  )
}

export default UserPage