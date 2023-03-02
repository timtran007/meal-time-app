import { render, screen, fireEvent } from '@testing-library/react';
import EditRecipeForm from '../EditRecipeForm'
const recipe_prop = {
    id: 2,
    title: "Brazilian Lemonade",
    instructions: "Step 1: cut off lime ends\nStep 2: cut into 8 wedges\nStep 3: combine limes into blender with water, condensed milk and sugar, \nStep 4: pulse 5 to 6 times,\nStep 5: strain out drink and discard pieces in the strainer\nStep 6: pour over ice and serve",
    cook_time_in_minutes: 2,
    prep_time_in_minutes: 8,
    image_url: 'afdkja;dflkajfd;aljdf;',
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
}

const functionProp = jest.fn()
function MockEditRecipeForm() {
    return(
        <EditRecipeForm recipe={recipe_prop} onSubmitEditRecipe={functionProp}/>
    )
}

describe('render new recipe form', () => {

    it('renders title input', async () => {
        render(<MockEditRecipeForm />);
        const titleInput = await screen.findByLabelText(/title/i)
        expect(titleInput).toBeInTheDocument()
    })

    it('renders imageUrl input', async () => {
        render(<MockEditRecipeForm />);
        const imageUrlInput = await screen.findByLabelText(/image url/i)
        expect(imageUrlInput).toBeInTheDocument()
    })

    it('renders cookTimeInMinutes input', async () => {
        render(<MockEditRecipeForm />);
        const cookTimeInMinutesInput = await screen.findByLabelText(/cook time in minutes/i)
        expect(cookTimeInMinutesInput).toBeInTheDocument()
    })

    it('renders prepTimeInMinutes input', async () => {
        render(<MockEditRecipeForm />);
        const prepTimeInMinutesInput = await screen.findByLabelText(/prep time/i)
        expect(prepTimeInMinutesInput).toBeInTheDocument()
    })

    it('renders instructions input', async () => {
        render(<MockEditRecipeForm />);
        const instructionsInput = await screen.findByLabelText(/instructions/i)
        expect(instructionsInput).toBeInTheDocument()
    })
    
})

describe('new recipe form functionality', () => {
    it('should be able to type into title input', async () => {
        render(<MockEditRecipeForm />);
        const titleInput = await screen.findByLabelText(/title/i)
        fireEvent.change(titleInput, { target: { value: "best steak restaurant"} })
        expect(titleInput.value).toBe("best steak restaurant")
    })
    
    it('should be able to type into imageUrl input', async () => {
        render(<MockEditRecipeForm />);
        const imageUrlInput = await screen.findByLabelText(/image url/i)
        fireEvent.change(imageUrlInput, { target: { value: "https://steakschool.com/wp-content/uploads/2020/02/Ribeye-1.jpg"} })
        expect(imageUrlInput.value).toBe("https://steakschool.com/wp-content/uploads/2020/02/Ribeye-1.jpg")
    })
    
    it('should be able to type into cookTimeInMinutes input', async () => {
        render(<MockEditRecipeForm />);
        const cookTimeInMinutesInput = await screen.findByLabelText(/cook time in minutes/i)
        fireEvent.change(cookTimeInMinutesInput, { target: { value: 15} })
        expect(cookTimeInMinutesInput.value).toBe("15")
    })
    
    it('should be able to type into prepTimeInMinutes input', async () => {
        render(<MockEditRecipeForm />);
        const prepTimeInMinutesInput = await screen.findByLabelText(/prep time/i)
        fireEvent.change(prepTimeInMinutesInput, { target: { value: 10} })
        expect(prepTimeInMinutesInput.value).toBe("10")
    })

    it('should be able to type into instructions input', async () => {
        render(<MockEditRecipeForm />);
        const instructionsInput = await screen.findByLabelText(/instructions/i)
        fireEvent.change(instructionsInput, { target: { value: "Step 1 you need to set the pan on high heat, Step 2: you need to season the steak with salt, pepper and garlic powder, Step 3 sear for 3 minutes each on both sides; Step 4 remove and place in the oven at 375 for 15 minutes or until internal temperature reaches 120; Step 5 remove and let rest for 10 minutes and then serve"} })
        expect(instructionsInput.value).toBe("Step 1 you need to set the pan on high heat, Step 2: you need to season the steak with salt, pepper and garlic powder, Step 3 sear for 3 minutes each on both sides; Step 4 remove and place in the oven at 375 for 15 minutes or until internal temperature reaches 120; Step 5 remove and let rest for 10 minutes and then serve")
    })

})