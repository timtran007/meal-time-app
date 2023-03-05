import React, { useState } from 'react'
import UserRecipeCard from '../../components/Cards/UserRecipeCard/UserRecipeCard'
import NewRecipeForm from '../../components/Forms/NewRecipeForm/NewRecipeForm'
import Button from 'react-bootstrap/Button'


function UserRecipesPage({userRecipes, onSubmitNewRecipe, onDeleteRecipe}) {

  const [showForm, setShowForm] = useState(false)
  function handleShowForm(e) {
    setShowForm(!showForm)
  }

  function onCollapseForm(state) {
    setShowForm(state)
  }

  return (
    <div>
        <h2>My Recipes</h2>
        <Button onClick={handleShowForm}>Add a New Recipe</Button>
        {showForm ? <NewRecipeForm onSubmitNewRecipe={onSubmitNewRecipe} showFormState={showForm} onCollapseForm={onCollapseForm}/>: null}
        
            {userRecipes ? userRecipes.map(recipe => {
                return(
                    <div key={recipe.id}>
                        <UserRecipeCard recipe={recipe} onDeleteRecipe={onDeleteRecipe}/>
                    </div>
                )
            }): "Loading"}

    </div>
    
    
  )
}

export default UserRecipesPage