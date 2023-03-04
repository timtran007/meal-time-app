import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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

    // function handleLikeClick(e) {
    //     //click on it once, we would set the like to add one
    //     //click on it again, we would make it go down by one
    //     //the value of the current like
    //     // did the user vote?

    //     const [voteState, setVoteState] = useState(false)
    //     const [likeCount, setLikeCount] = useState(recipe.likes)
        

    // }

    const displayError = errors.map( e => {
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
    })



  return (
    <div>
        <Card>
            <Card.Title>Recipe: {recipe.title}</Card.Title>
            <Card.Img variant="top" src={recipe.image_url} />
            <Card.Body>
                {following.map(f => f.id).includes(recipe.user.id) ?  null : <Button id={recipe.user.id} onClick={handleFollowClick}>Follow</Button>}
                <div>
            {displayError}
        </div>
            </Card.Body>
            <Card.Body>
              <Card.Text>
                    Cook Time: {recipe.cook_time_in_minutes}
                </Card.Text>
                <Card.Text>
                    Prep Time: {recipe.prep_time_in_minutes}
                </Card.Text>
                <Card.Text>
                    {user ? `${recipe.user.name} | ${recipe.user.image_url}` : `${user.name} | ${user.image_url}`}
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
                {/* <Button onClick={handleLikeClick}>
                    Likes: {recipe.likes}
                </Button> */}
            </div>
        </Card>
    </div>
  )
}

export default RecipeCard