import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailedRecipeCard from '../DetailedRecipeCard'

const recipeProps =
        [{
            id: 2,
            title: "Brazilian Lemonade",
            instructions: "Step 1: cut off lime ends\nStep 2: cut into 8 wedges\nStep 3: combine limes into blender with water, condensed milk and sugar, \nStep 4: pulse 5 to 6 times,\nStep 5: strain out drink and discard pieces in the strainer\nStep 6: pour over ice and serve",
            cook_time_in_minutes: 2,
            prep_time_in_minutes: 8,
            likes: 0,
            user: {
                id: 1,
                name: "Tim",
                email: "tim@gmail.com",
                image_url: null
            },
            recipe_ingredients: [
                {
                id: 5,
                name: "lime",
                category: "produce",
                quantity: "8",
                measurement: "ounce/ounces"
                },
                {
                id: 6,
                name: "sugar",
                category: "baking",
                quantity: "1/3",
                measurement: "cup/cups"
                },
                {
                id: 7,
                name: "water",
                category: "drinks",
                quantity: "4",
                measurement: "cup/cups"
                }
                ]
        }]
function MockDetailedRecipeCard(){
    return(
        <BrowserRouter>
            <DetailedRecipeCard recipes={recipeProps}/>
        </BrowserRouter>
    )
}
describe('DetailedRecipeCard', () => {

    it('properly renders Detailed Recipe Card', async () => {
        render(<MockDetailedRecipeCard />);
        const title = await screen.findByText(/loading/i)
        expect(title).toBeInTheDocument()
    })
})

