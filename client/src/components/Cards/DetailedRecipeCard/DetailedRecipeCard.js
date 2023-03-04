import React from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


function DetailedRecipeCard({recipes}) {
    const params = useParams()
    const recipe = recipes.find(recipe => recipe.id === parseInt(params.recipe_id))
    if(recipe){
    return(
        <div>
            <Card>
                <Card.Body>
                    <Card.Img src={recipe.user.image_url}>
                    </Card.Img>
                    <Card.Text>
                        {recipe.user.name}
                    </Card.Text>
                </Card.Body>
                <Card.Title data-testid="Recipe Title">{recipe.title}</Card.Title>
                <Card.Img variant="top" src={recipe.image_url} />
                <Card.Body>
                <Card.Text>
                        Cook Time: {recipe.cook_time_in_minutes}
                    </Card.Text>
                    <Card.Text>
                        Prep Time: {recipe.prep_time_in_minutes}
                    </Card.Text>
                    <Card.Text>
                        Instructions: {recipe.instructions}
                    </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        Ingredients: {recipe.recipe_ingredients.map(ingredient => {
                            return(
                                <Card.Text key={ingredient.id}>
                                    {ingredient.name} - {ingredient.quantity} {ingredient.measurement}
                                </Card.Text>
                            )
                        })}
                    </Card.Body>
                    {/* <Card.Text>
                        Likes: {recipe.likes}
                    </Card.Text> */}
            </Card>
        </div>
    )} else{
        return "Loading"
    }

}

export default DetailedRecipeCard