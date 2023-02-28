import { render, screen } from '@testing-library/react';
import UserDetailedRecipeCard from '../UserDetailedRecipeCard'
import { BrowserRouter } from 'react-router-dom';

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

function MockUserDetailedRecipeCard(){
    return(
        <BrowserRouter>
            <UserDetailedRecipeCard userRecipes={recipeProps}/>
        </BrowserRouter>
    )
}

describe('UserDetailedRecipeCard', () => {

    it('successfully renders user detailed recipe', async() => {
        render(<MockUserDetailedRecipeCard userRecipes={[]}/>);
        const text = await screen.findByText(/loading/i)
        expect(text).toBeInTheDocument()
    })

})