import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

function HomeRecipeCard({recipe}) {
    const history = useHistory()
    
    function handleClick(e) {
        const recipeId = e.target.id
        history.push(`/recipes/${recipeId}`)
    }

  return (
    <div>
        <Card className="recipeCard">
            <Stack gap={4}>
            <Card.Title>Recipe: {recipe.title}</Card.Title>
            <Card.Img variant="top" src={recipe.image_url} />
            </Stack>
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
                    {recipe.user.name}
                </Card.Text>
                <Card.Img src={recipe.user.image_url} className='profileImage'></Card.Img>
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