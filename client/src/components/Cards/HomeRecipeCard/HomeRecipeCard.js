import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function HomeRecipeCard({recipe}) {
    const history = useHistory()
    
    function handleClick(e) {
        const recipeId = e.target.id
        history.push(`/recipes/${recipeId}`)
    }

  return (
    <div>
        <Card>
            <Card.Title>Recipe: {recipe.title}</Card.Title>
            <Card.Img variant="top" src={recipe.image_url} />
            <Card.Body>
            </Card.Body>
            <Card.Body>
              <Card.Text>
                    Cook Time: {recipe.cook_time_in_minutes}
                </Card.Text>
                <Card.Text>
                    Prep Time: {recipe.prep_time_in_minutes}
                </Card.Text>
                <Card.Text>
                    {recipe.user.name} | {recipe.user.image_url}
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
            </div>
        </Card>
    </div>
  )
}

export default HomeRecipeCard