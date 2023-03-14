import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NewRecipeIngredientForm from '../../Forms/NewRecipeIngredientForm/NewRecipeIngredientForm'
import EditRecipeForm from '../../Forms/EditRecipeForm/EditRecipeForm'
import EditRecipeIngredientForm from '../../Forms/EditRecipeIngredientForm/EditRecipeIngredientForm'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'


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

    function onCollapseRecipeForm(newState) {
        setShowEditForm(newState)
    }

    function onAddIngredientState(newState) {
        setShowIngredientForm(newState)
    }

    function onEditIngredientState(newState) {
        setEditIngredientForm(newState)
    }

    const recipe = userRecipes.find(recipe => recipe.id === parseInt(params.recipe_id))
    if(recipe){
    return(
        <div>
            <Container className='containerSpacing'>
                <Card.Title data-testid="Recipe Title">{recipe.title}</Card.Title>
                <Card.Img variant="top" src={recipe.image_url} className="recipeImage"/>
                <Card.Body>
                    <Card.Text>
                        Cook Time: {recipe.cook_time_in_minutes} | Prep Time: {recipe.prep_time_in_minutes}
                    </Card.Text>
                    <Card.Text>
                        Instructions: {recipe.instructions}
                    </Card.Text>
                </Card.Body>
                <Card.Body className='spacing'>
                    <h5>Ingredients:</h5> 
                    {recipe.recipe_ingredients.map(ingredient => {
                        return(
                            <Card.Body className='spacing'>
                            <Stack key={ingredient.id} direction='horizontal' gap={5}>
                                <Card.Text key={ingredient.id}>
                                    {ingredient.name} - {ingredient.quantity} {ingredient.measurement}
                                </Card.Text>
                                <Button 
                                    id={ingredient.id} 
                                    onClick={handleDeleteIngredient}
                                    variant='outline-danger'
                                    size='sm'
                                >
                                    delete
                                </Button>
                                    <Button 
                                        id={ingredient.id} 
                                        onClick={handleEditIngredient}
                                        variant='secondary'
                                        size='sm'
                                    >
                                        edit
                                    </Button>
                                        {showEditIngredientForm && targetID === ingredient.id ? 
                                            <EditRecipeIngredientForm
                                                ingredient={ingredient} 
                                                recipe={recipe} 
                                                onEditRecipeIngredient={onEditRecipeIngredient} 
                                                ingredientId={ingredient.id} onEditIngredientState={onEditIngredientState}
                                            /> : 
                                            null}
                                </Stack>
                             </Card.Body>
                        )
                    })}
                </Card.Body>
                    {/* <Card.Text>
                        Likes: {recipe.likes}
                    </Card.Text> */}
                    <Stack gap={3}>
                        <Button className="updateButton" variant='outline-secondary' onClick={handleClickAddIngredients}>add ingredients</Button>
                            <div>
                                { showIngredientForm ? <NewRecipeIngredientForm recipe={recipe} onAddRecipeIngredient={onAddRecipeIngredient} onAddIngredientState={onAddIngredientState}/> : null}
                            </div>
                        <Button className="updateButton" variant='secondary' onClick={handleShowEditRecipeForm}>Edit Recipe</Button>
                            {showEditForm ? <EditRecipeForm onSubmitEditRecipe={onSubmitEditRecipe} recipe={recipe} onCollapseRecipeForm={onCollapseRecipeForm}/> : null}
                    </Stack>
            </Container>
        </div>
    )} else{
        return "Loading..."
    }

}

export default UserDetailedRecipeCard