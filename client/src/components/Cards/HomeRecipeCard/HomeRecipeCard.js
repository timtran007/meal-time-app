import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'

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
            <Card.Body>
                <Stack 
                    direction='horizontal'
                    gap={5}
                >
                    <Image 
                        roundedCircle='true' 
                        src={recipe.user.image_url} 
                        className='profileImage'
                    />
                    <Card.Text>
                        {recipe.user.name}
                    </Card.Text>
                </Stack>
            </Card.Body>
            <Card.Title>Recipe: {recipe.title}</Card.Title>
            <Card.Img variant="top" src={recipe.image_url} />
            </Stack>
            <Card.Body>
            </Card.Body>
            <Card.Body>
              <Card.Text>
                    Cook Time: {recipe.cook_time_in_minutes} | 
                    Prep Time: {recipe.prep_time_in_minutes}
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