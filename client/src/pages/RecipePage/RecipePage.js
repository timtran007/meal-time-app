import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import RecipeCard from '../../../src/components/Cards/RecipeCard/RecipeCard'
import Stack from 'react-bootstrap/esm/Stack'

function RecipePage({recipes, user, following, onFollowUser}) {
    const flatened = following.flatMap( f => f.recipes)
    const r = recipes.filter(r => r.user.id !== user.id)
    const userRecipes = [...flatened, ...r]
    const key = 'id'
    const uniqueRecipes = [...new Map(userRecipes.map(recipe => [recipe[key], recipe])).values()]
    
    const shuffledRecipes = uniqueRecipes.sort(() => Math.random() - 0.5)
    
    if(user){
        return(
            <Container>
                <h2 className="heading">Recipes</h2>
                <Stack gap={5}>
                    { userRecipes ? shuffledRecipes.map( (recipe) => {
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
                </Stack>
            </Container>
        )
    }
}

export default RecipePage