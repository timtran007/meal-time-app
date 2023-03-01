import React from 'react'
import UserCard from '../../components/Cards/UserCard/UserCard'
import FollowerCard from '../../components/Cards/FollowerCard/FollowerCard'
import FollowingCard from '../../components/Cards/FollowingCard/FollowingCard'

function UserPage({user, followers, following, onDeleteFollowingShip}) {

  return (
    <div>
      <h2>My Profile</h2>
      { user ? <UserCard user={user}/>: "loading"}
      <h3>Followers</h3>
        {followers ? followers.map(follower  => {
          return(
            <div key={follower.id}>
            <FollowerCard follower={follower}/>
            </div>
          )
        }): 'loading'}
      <h3>Following</h3>
        { following ? following.map(f  => {
          return(
            <div key={f.id}>
              <FollowingCard user={user} following={f} onDeleteFollowingShip={onDeleteFollowingShip}/>
            </div>
          )
        }) : "loading"}
    </div>
  )
}

export default UserPage