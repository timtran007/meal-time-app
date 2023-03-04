import React from 'react'
import RecipeCard from '../../../src/components/Cards/RecipeCard/RecipeCard'

function RecipePage({recipes, user, following, onFollowUser}) {
    const flatened = following.flatMap( f => f.recipes)
    const r = recipes.filter(r => r.user.id !== user.id)
    const userRecipes = [...flatened, ...r]
    const key = 'id'
    const uniqueRecipes = [...new Map(userRecipes.map(recipe => [recipe[key], recipe])).values()]
    
    if(user){
        return(
            <div>
                <h2>Recipes</h2>
                <div>
                    { userRecipes ? uniqueRecipes.map( (recipe) => {
                            return(
                                <div key={recipe.id}>
                                    <RecipeCard 
                                        recipe={recipe}
                                        following={following}
                                        user={user}
                                        onFollowUser={onFollowUser}
                                    />
                                </div>
                            )
                        }) : "loading"}
                </div>
            </div>
        )
    }
}

export default RecipePage