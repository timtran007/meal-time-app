import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'

function RecipeCard({recipe, user, following, onFollowUser}) {
    const history = useHistory()

    const [errors, setErrors] = useState([])
    
    function handleClick(e) {
        const recipeId = e.target.id
        history.push(`/recipes/${recipeId}`)
    }

    function handleFollowClick(e) {
        
        let formData = {
            user_1_id: parseInt(user.id),
            user_2_id: parseInt(e.target.id),
        }

        fetch('/following_ships', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(newFollowingShip => onFollowUser(newFollowingShip))
            } else {
                resp.json().then(error => setErrors(error.errors))
            }
        })
    }
    // // will need to build a join table between user's like associated with the recipe's likes in terms of vote status
    // const [voteState, setVoteState] = useState(false)
    // const [likeState, setLikeState] = useState(false)
    // const [likeCount, setLikeCount] = useState(recipe.likes)
    // function handleLikeClick(e) {
    //     const recipeId = parseInt(e.target.id)
    //     if(!voteState && !likeState) {
    //         fetch(`/recipe-likes/${recipeId}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 likes: parseInt(recipe.likes + 1)
    //             })
    //         })
    //         .then(resp =>{
    //             if(resp.ok) {
    //                 resp.json().then(updatedData => {
    //                     onLikeClick(updatedData)
    //                     setLikeState(true)
    //                     setVoteState(true)
    //                 })
    //             } else {
    //                 resp.json().then(error => setErrors(error.errors))
    //             }
    //         })
    //     } else if (voteState && likeState) {
    //         fetch(`/recipe-likes/${recipeId}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 likes: parseInt(recipe.likes - 1)
    //             })
    //         })
    //         .then(resp =>{
    //             if(resp.ok) {
    //                 resp.json().then(updatedData => {
    //                     onLikeClick(updatedData)
    //                     setLikeState(false)
    //                     setVoteState(false)
    //                 })
    //             } else {
    //                 resp.json().then(error => setErrors(error.errors))
    //             }
    //         })
    //     }
    // }

    const displayError = errors.map( e => {
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
    })

  return (
    <div>
        <Card className='recipeCard'>
            <Stack gap={4}>
            <Card.Body>
                    {user ? 
                    <Card.Body>
                        <Stack direction='horizontal' gap={5}>
                            <Image 
                                src={recipe.user.image_url}
                                roundedCircle='true'
                                className="profileImage" 
                            /> 
                            <Card.Text>{recipe.user.name}</Card.Text>
                        </Stack>
                    </Card.Body> : 
                    <Card.Body>
                        <Stack direction='horizontal' gap={5}>
                            <Image 
                                src={user.image_url}
                                roundedCircle='true'
                                className="profileImage"
                            /> 
                            <Card.Text>{user.name}</Card.Text>
                        </Stack>
                    </Card.Body>}
                </Card.Body>
            <Card.Title>Recipe: {recipe.title}</Card.Title>
            <Card.Img variant="top" src={recipe.image_url} />
            </Stack>
            <Card.Body>
                {following.map(f => f.id).includes(recipe.user.id) ?  
                    null : 
                    <Button 
                        id={recipe.user.id} 
                        onClick={handleFollowClick}
                        variant='outline-primary'
                        size='sm'
                    >
                        Follow
                    </Button>}
                <Card.Text>
                    {displayError}
                </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text>
                    Cook Time: {recipe.cook_time_in_minutes} | Prep Time: {recipe.prep_time_in_minutes}
                </Card.Text>
            </Card.Body>
            <div>
                <Button 
                    id={recipe.id}
                    size="sm" 
                    variant="secondary"
                    onClick={handleClick}
                >
                    More Details
                </Button>
                {/* <Button id={recipe.id} onClick={handleLikeClick}>
                    Likes: {recipe.likes}
                </Button> */}
            </div>
        </Card>
    </div>
  )
}

export default RecipeCard