import React from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


function DetailedRecipeCard({recipes}) {
    const params = useParams()
    const recipe = recipes.find(recipe => recipe.id === parseInt(params.recipe_id))
    if(recipe){
    return(
        <div className=''>
            <Container
                className='containerSpacing'
            >
                <Stack gap={4}>
                    <Card.Title data-testid="Recipe Title">Recipe: {recipe.title}</Card.Title>
                    <Card.Img variant="top" src={recipe.image_url} />
                <Card.Body>
                    <Card.Text>
                        Cook Time: {recipe.cook_time_in_minutes} | Prep Time: {recipe.prep_time_in_minutes} 
                    </Card.Text>
                    <Card.Text>
                        Instructions: {recipe.instructions}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text>
                    <h5>Ingredients:</h5> 
                    {recipe.recipe_ingredients.map(ingredient => {
                        return(
                            <Card.Text key={ingredient.id}>
                                {ingredient.name} - {ingredient.quantity} {ingredient.measurement}
                            </Card.Text>
                            )
                        })}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Stack>
                        by:
                        <Image 
                            src={recipe.user.image_url} 
                            roundedCircle='true'
                            className='profileImage'
                        />
                        <Card.Text>
                            {recipe.user.name}
                        </Card.Text>
                    </Stack>
                    
                </Card.Body>
                    {/* <Card.Text>
                        Likes: {recipe.likes}
                    </Card.Text> */}
                </Stack>
            </Container>
        </div>
    )} else{
        return "Loading"
    }

}

export default DetailedRecipeCard