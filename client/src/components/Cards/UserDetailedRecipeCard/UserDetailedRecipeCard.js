import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NewRecipeIngredientForm from '../../Forms/NewRecipeIngredientForm/NewRecipeIngredientForm'
import EditRecipeForm from '../../Forms/EditRecipeForm/EditRecipeForm'
import EditRecipeIngredientForm from '../../Forms/EditRecipeIngredientForm/EditRecipeIngredientForm'


function UserDetailedRecipeCard({userRecipes, onSubmitEditRecipe, onAddRecipeIngredient, onEditRecipeIngredient, onDeleteRecipeIngredient}) {
    // 1. create state for toggling of edit button
    // 2. adds the edit form here for the recipe
    // 3. ability to add in ingredients
    

    const params = useParams()

    const [errors, setErrors] = useState([])

    const [showEditForm, setShowEditForm] = useState(false)

    const [showIngredientForm, setShowIngredientForm] = useState(false)

    const [showEditIngredientForm, setEditIngredientForm] = useState(false)

    const [targetID, setTargetID] = useState(0)

    function handleShowEditRecipeForm() {
        setShowEditForm(!showEditForm)
    }

    function handleClickAddIngredients(e) {
        setShowIngredientForm(!showIngredientForm)
    }

    function handleEditIngredient(e) {
        setEditIngredientForm(!showEditIngredientForm)
        setTargetID(parseInt(e.target.id))
        
    }
    function handleDeleteIngredient(e) {
        const ingredientId = e.target.id
        fetch(`/recipe_ingredients/${ingredientId}`, {
            method: "DELETE"
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(deletedIngredient => onDeleteRecipeIngredient(deletedIngredient))
            } else {
                resp.json().then(error => setErrors(error.errors))
            }
        })

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
                                <Button id={ingredient.id} onClick={handleEditIngredient}>edit</Button>
                                {showEditIngredientForm && targetID === ingredient.id ? <EditRecipeIngredientForm ingredient={ingredient} recipe={recipe} onEditRecipeIngredient={onEditRecipeIngredient} ingredientId={ingredient.id}/> : null}
                                <Button id={ingredient.id} onClick={handleDeleteIngredient}>delete</Button>
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
                    <Button onClick={handleShowEditRecipeForm}>edit</Button>
                        {showEditForm ? <EditRecipeForm onSubmitEditRecipe={onSubmitEditRecipe} recipe={recipe}/> : null}
            </Card>
        </div>
    )} else{
        return "Loading..."
    }

}

export default UserDetailedRecipeCard