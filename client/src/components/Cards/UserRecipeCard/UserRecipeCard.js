import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function UserRecipeCard({recipe, onDeleteRecipe}) {
    const history = useHistory()
    
    const [errors, setErrors] = useState([])
    
    function handleClickForDetails(e) {
        const recipeId = e.target.id
        history.push(`/profile/recipes/${recipeId}`)
    }

    function handleDeleteRecipe(e){
        //handle delete function
        debugger
        const recipeId = recipe.id 
        fetch(`/recipes/${recipe.id}`, {
            method: "DELETE"
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(deletedRecipe => onDeleteRecipe(deletedRecipe))
            } else {
                resp.json().then( error => setErrors(error.errors))
            }
        })
    }
    
  return (
    <div>
        <Card>
            <Card.Title>Recipe: {recipe.title}</Card.Title>
            <Card.Img variant="top" src={recipe.image_url} />
            <Card.Body>
              <Card.Text>
                    Cook Time: {recipe.cook_time_in_minutes}
                </Card.Text>
                <Card.Text>
                    Prep Time: {recipe.prep_time_in_minutes}
                </Card.Text>
            </Card.Body>
            <div>
                <Button 
                    id={recipe.id}
                    size="sm" 
                    variant="secondary"
                    onClick={handleClickForDetails}
                >
                    More Details
                </Button>
                <Button 
                    id={recipe.id}
                    size="sm" 
                    variant="secondary"
                    onClick={handleDeleteRecipe}
                >
                    Delete
                </Button>
                
            </div>
        </Card>
    </div>
  )
}

export default UserRecipeCard