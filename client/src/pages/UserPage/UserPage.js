import React from 'react'
import UserCard from '../../components/Cards/UserCard/UserCard'
import FollowerCard from '../../components/Cards/FollowerCard/FollowerCard'
import FollowingCard from '../../components/Cards/FollowingCard/FollowingCard'

function UserPage({user, followers, following}) {

  return (
    <div>
      <h2>My Profile</h2>
      { user ? <UserCard user={user}/>: "loading"}
      <h3>Followers</h3>
        {followers ? followers.map(follower  => {
          return(
            <FollowerCard follower={follower}/>
          )
        }): 'loading'}
      <h3>Following</h3>
        { following !== undefined ? following.map(following  => {
          return(
            <FollowingCard />
          )
        }) : "loading"}
    </div>
  )
}

export default UserPage