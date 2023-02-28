import React from 'react'
import UserRecipeCard from '../../components/Cards/UserRecipeCard/UserRecipeCard'

function UserRecipesPage({userRecipes}) {
  return (
    <div>
        <h2>My Recipes</h2>
        
            {userRecipes ? userRecipes.map(recipe => {
                return(
                    <div key={recipe.id}>
                        <UserRecipeCard recipe={recipe}/>
                    </div>
                )
            }): "Loading"}
    </div>
    
    
  )
}

export default UserRecipesPage