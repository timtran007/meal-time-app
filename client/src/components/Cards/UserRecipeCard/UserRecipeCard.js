import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'


function UserRecipeCard({recipe, onDeleteRecipe}) {
    const history = useHistory()
    
    const [errors, setErrors] = useState([])
    
    function handleClickForDetails(e) {
        const recipeId = e.target.id
        history.push(`/profile/recipes/${recipeId}`)
    }

    function handleDeleteRecipe(e){
        //handle delete function
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
        <Card className='generalCard'>
            <Stack gap={4}>
            <Card.Title>Recipe: {recipe.title}</Card.Title>
            <Card.Img variant="top" src={recipe.image_url} />
            <Card.Body>
              <Card.Text>
                    Cook Time: {recipe.cook_time_in_minutes} | 
                    Prep Time: {recipe.prep_time_in_minutes}
                </Card.Text>
            </Card.Body>
            <Stack className='col-md mx-auto' direction='horizontal' gap={3}>
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
                    variant="danger"
                    onClick={handleDeleteRecipe}
                >
                    Delete
                </Button>
            </Stack>

            </Stack>
        </Card>
    </div>
  )
}

export default UserRecipeCard