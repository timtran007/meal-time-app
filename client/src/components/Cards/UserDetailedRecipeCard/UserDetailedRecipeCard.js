import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NewRecipeIngredientForm from '../../Forms/NewRecipeIngredientForm/NewRecipeIngredientForm'
import EditRecipeForm from '../../Forms/EditRecipeForm/EditRecipeForm'


function UserDetailedRecipeCard({userRecipes, onSubmitEditRecipe, onAddRecipeIngredient}) {
    // 1. create state for toggling of edit button
    // 2. adds the edit form here for the recipe
    // 3. ability to add in ingredients
    

    const params = useParams()

    const [errors, setErrors] = useState([])

    const [showEditForm, setShowEditForm] = useState(false)

    const [showIngredientForm, setShowIngredientForm] = useState(false)

    function handleShowEditForm() {
        setShowEditForm(!showEditForm)
    }

    function handleClickAddIngredients(e) {
        setShowIngredientForm(!showIngredientForm)
    }

    function handleEditIngredient(e) {
        //create patch request to update the recipe's ingredient
        //pass information down from the App.js updating the User's Recipes' Recipe Ingredients
    }

    function handleDeleteIngredient() {

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
                                <Card.Body key={ingredient.id}>
                                <Card.Text key={ingredient.id}>
                                    {ingredient.name} - {ingredient.quantity} {ingredient.measurement}
                                </Card.Text>
                                <Button onClick={handleEditIngredient}>edit</Button>
                                <Button onClick={handleDeleteIngredient}>delete</Button>
                                </Card.Body>
                            )
                        })}
                    </Card.Body>
                    <Card.Text>
                        Likes: {recipe.likes}
                    </Card.Text>
                    <Button onClick={handleClickAddIngredients}>add ingredients</Button>
                        <div>
                            { showIngredientForm ? <NewRecipeIngredientForm recipe={recipe} onAddRecipeIngredient={onAddRecipeIngredient}/> : null}
                        </div>
                    <Button onClick={handleShowEditForm}>edit</Button>
                        {showEditForm ? <EditRecipeForm onSubmitEditRecipe={onSubmitEditRecipe} recipe={recipe}/> : null}
            </Card>
        </div>
    )} else{
        return "Loading..."
    }

}

export default UserDetailedRecipeCard