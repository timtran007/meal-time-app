import React, { useContext } from 'react'
import HomeRecipeCard from '../../../src/components/Cards/HomeRecipeCard/HomeRecipeCard'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import '../../../src/App.css'
import { RecipesContext } from '../../context/recipes';


function RecipeHomePage() {
    const recipes = useContext(RecipesContext)
  return (
    <Container>
        <Row >
            <h2 className="heading">Discover Recipes</h2>
        </Row>
        <Stack gap={5}>
            {recipes?recipes.map((recipe) => {
                return(
                    <div key={recipe.id}>
                        <HomeRecipeCard 
                            recipe={recipe}
                        />
                    </div>
                )
            }):null}  
        </Stack>
    </Container>
  )
}

export default RecipeHomePage