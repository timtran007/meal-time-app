import React from 'react'
import RecipeCard from '../../../src/components/Cards/RecipeCard/RecipeCard'

function RecipePage({recipes}) {
    
  return (
    <div>
        <h2>Recipes</h2>
        <div>
            {recipes?recipes.map((recipe) => {
                return(
                    <div key={recipe.id}>
                        <RecipeCard 
                            recipe={recipe}
                        />
                    </div>
                )
            }):null}
            
        </div>
    </div>
  )
}

export default RecipePage