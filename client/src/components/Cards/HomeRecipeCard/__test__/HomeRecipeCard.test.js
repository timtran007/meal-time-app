import { render, screen } from '@testing-library/react';
import HomeRecipeCard from '../HomeRecipeCard'

describe('HomeRecipeCard', () => {

    const recipeProps =
        {
            id: 2,
            title: "Brazilian Lemonade",
            instructions: "Step 1: cut off lime ends\nStep 2: cut into 8 wedges\nStep 3: combine limes into blender with water, condensed milk and sugar, \nStep 4: pulse 5 to 6 times,\nStep 5: strain out drink and discard pieces in the strainer\nStep 6: pour over ice and serve",
            cook_time_in_minutes: 2,
            prep_time_in_minutes: 8,
            user: {
                id: 1,
                name: "Tim",
                email: "tim@gmail.com",
                image_url: null
            },
        }
    
    it('renders card view of a recipe', async () => {
        render(<HomeRecipeCard recipe={recipeProps}/>);
        const recipeCardDivElement = await screen.findByText(/recipe/i)
        expect(recipeCardDivElement).toBeInTheDocument()
    })
    
})

