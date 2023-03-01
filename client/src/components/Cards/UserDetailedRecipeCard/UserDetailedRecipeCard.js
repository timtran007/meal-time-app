import React from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NewRecipeIngredientForm from '../../Forms/NewRecipeIngredientForm/NewRecipeIngredientForm'


function UserDetailedRecipeCard({userRecipes}) {
    // 1. create state for toggling of edit button
    // 2. adds the edit form here for the recipe
    // 3. ability to add in ingredients
    

    const params = useParams()

    function handleEdit(e) {
        //builds out the edit function
    }

    function handleAddIngredients(e) {
        //builds out the edit function
    }

    const recipe = userRecipes.find(recipe => recipe.id === parseInt(params.recipe_id))
    if(recipe){
    return(
        <div>
            <Card>
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
                    <Card.Text>
                        Likes: {recipe.likes}
                    </Card.Text>
                    <Button onClick={handleAddIngredients}>add ingredients</Button>
                        <div>
                            <NewRecipeIngredientForm />
                        </div>
                    <Button onClick={handleEdit}>edit my recipe</Button>
            </Card>
        </div>
    )} else{
        return "Loading..."
    }

}

export default UserDetailedRecipeCard