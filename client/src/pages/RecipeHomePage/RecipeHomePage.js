import React from 'react'
import HomeRecipeCard from '../../../src/components/Cards/HomeRecipeCard/HomeRecipeCard'

function RecipeHomePage({recipes}) {
  return (
    <div>
        <h2>Recipes</h2>
        <div>
            {recipes?recipes.map((recipe) => {
                return(
                    <div key={recipe.id}>
                        <HomeRecipeCard 
                            recipe={recipe}
                        />
                    </div>
                )
            }):null}
            
        </div>
    </div>
  )
}

export default RecipeHomePage