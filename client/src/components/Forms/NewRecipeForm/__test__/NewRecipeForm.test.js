import { render, screen, fireEvent } from '@testing-library/react';
import NewRecipeForm from '../NewRecipeForm'

const functionProp = jest.fn()
describe('render new recipe form', () => {

    it('renders title input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const titleInput = screen.getByLabelText(/title/i)
        expect(titleInput).toBeInTheDocument()
    })

    it('renders imageUrl input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const imageUrlInput = screen.getByLabelText(/image url/i)
        expect(imageUrlInput).toBeInTheDocument()
    })

    it('renders cookTimeInMinutes input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const cookTimeInMinutesInput = screen.getByLabelText(/cook time in minutes/i)
        expect(cookTimeInMinutesInput).toBeInTheDocument()
    })

    it('renders prepTimeInMinutes input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const prepTimeInMinutesInput = screen.getByLabelText(/prep time/i)
        expect(prepTimeInMinutesInput).toBeInTheDocument()
    })

    it('renders instructions input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const instructionsInput = screen.getByLabelText(/instructions/i)
        expect(instructionsInput).toBeInTheDocument()
    })
    
})

describe('new recipe form functionality', () => {
    it('should be able to type into title input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const titleInput = screen.getByLabelText(/title/i)
        fireEvent.change(titleInput, { target: { value: "best steak restaurant"} })
        expect(titleInput.value).toBe("best steak restaurant")
    })
    
    it('should be able to type into imageUrl input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const imageUrlInput = screen.getByLabelText(/image url/i)
        fireEvent.change(imageUrlInput, { target: { value: "https://steakschool.com/wp-content/uploads/2020/02/Ribeye-1.jpg"} })
        expect(imageUrlInput.value).toBe("https://steakschool.com/wp-content/uploads/2020/02/Ribeye-1.jpg")
    })
    
    it('should be able to type into cookTimeInMinutes input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const cookTimeInMinutesInput = screen.getByLabelText(/cook time in minutes/i)
        fireEvent.change(cookTimeInMinutesInput, { target: { value: 15} })
        expect(cookTimeInMinutesInput.value).toBe("15")
    })
    
    it('should be able to type into prepTimeInMinutes input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const prepTimeInMinutesInput = screen.getByLabelText(/prep time/i)
        fireEvent.change(prepTimeInMinutesInput, { target: { value: 10} })
        expect(prepTimeInMinutesInput.value).toBe("10")
    })

    it('should be able to type into instructions input', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const instructionsInput = screen.getByLabelText(/instructions/i)
        fireEvent.change(instructionsInput, { target: { value: "Step 1 you need to set the pan on high heat, Step 2: you need to season the steak with salt, pepper and garlic powder, Step 3 sear for 3 minutes each on both sides; Step 4 remove and place in the oven at 375 for 15 minutes or until internal temperature reaches 120; Step 5 remove and let rest for 10 minutes and then serve"} })
        expect(instructionsInput.value).toBe("Step 1 you need to set the pan on high heat, Step 2: you need to season the steak with salt, pepper and garlic powder, Step 3 sear for 3 minutes each on both sides; Step 4 remove and place in the oven at 375 for 15 minutes or until internal temperature reaches 120; Step 5 remove and let rest for 10 minutes and then serve")
    })

    //clears out the the input fields once button is clicked

    it('should clear title input after button click', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const titleInput = screen.getByLabelText(/title/i)
        const button = screen.getByRole( 'button', { name: /add recipe/i})
        fireEvent.change(titleInput, { target: { value: "best steak restaurant"} })
        fireEvent.click(button)
        expect(titleInput.value).toBe("")
    })
    
    it('should clear imageUrl input after button click', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const imageUrlInput = screen.getByLabelText(/image url/i)
        const button = screen.getByRole( 'button', { name: /add recipe/i})
        fireEvent.change(imageUrlInput, { target: { value: "https://steakschool.com/wp-content/uploads/2020/02/Ribeye-1.jpg"} })
        fireEvent.click(button)
        expect(imageUrlInput.value).toBe("")
    })
    
    it('should clear cookTimeInMinutes input after button click', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const cookTimeInMinutesInput = screen.getByLabelText(/cook time in minutes/i)
        const button = screen.getByRole( 'button', { name: /add recipe/i})
        fireEvent.change(cookTimeInMinutesInput, { target: { value: 15} })
        fireEvent.click(button)
        expect(cookTimeInMinutesInput.value).toBe("0")
    })
    
    it('should clear prepTimeInMinutes input after button click', () => {
        render(<NewRecipeForm onSubmitNewRecipe={functionProp}/>);
        const prepTimeInMinutesInput = screen.getByLabelText(/prep time/i)
        const button = screen.getByRole( 'button', { name: /add recipe/i})
        fireEvent.change(prepTimeInMinutesInput, { target: { value: 10} })
        fireEvent.click(button)
        expect(prepTimeInMinutesInput.value).toBe("0")
    })
})