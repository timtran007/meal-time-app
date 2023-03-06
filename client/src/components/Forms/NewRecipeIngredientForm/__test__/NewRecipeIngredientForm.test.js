import { render, screen, fireEvent } from '@testing-library/react';
import NewRecipeIngredientForm from '../NewRecipeIngredientForm'

const mockfn = jest.fn()
describe('render new recipe ingredients form', () => {

    it('renders name input', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const nameInput = screen.getByPlaceholderText(/name/i)
        expect(nameInput).toBeInTheDocument()
    })

    it('renders category input', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const categoryInput = screen.getByDisplayValue(/select a category/i)
        expect(categoryInput).toBeInTheDocument()
    })

    it('renders quantity input', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const quantityInput = screen.getByPlaceholderText(/quantity/i)
        expect(quantityInput).toBeInTheDocument()
    })

    it('renders measurement input', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const measurementInput = screen.getByDisplayValue(/select a measurement/i)
        expect(measurementInput).toBeInTheDocument()
    })
    
})

describe('new recipe ingredient form functionality', () => {
    it('should be able to type into name input', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const nameInput = screen.getByPlaceholderText(/name/i)
        fireEvent.change(nameInput, { target: { value: "ribeye steak"} })
        expect(nameInput.value).toBe("ribeye steak")
    })
    
    it('should be able to type into category input', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const categoryInput = screen.getByDisplayValue(/select a category/i)
        fireEvent.change(categoryInput, { target: { value: "meats"} })
        expect(categoryInput.value).toBe("meats")
    })
    
    it('should be able to type into quantity input', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const quantityInput = screen.getByPlaceholderText(/quantity/i)
        fireEvent.change(quantityInput, { target: { value: "16"} })
        expect(quantityInput.value).toBe("16")
    })
    
    it('should be able to type into measurement input', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const measurementInput = screen.getByDisplayValue(/select a measurement/i)
        fireEvent.change(measurementInput, { target: { value: "ounce/ounces"} })
        expect(measurementInput.value).toBe("ounce/ounces")
    })

    //clears out the the input fields once button is clicked

    it('should clear name input after button click', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const nameInput = screen.getByPlaceholderText(/name/i)
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(nameInput, { target: { value: "ribeye"} })
        fireEvent.click(button)
        expect(nameInput.value).toBe("")
    })
    
    it('should clear category input after button click', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const categoryInput = screen.getByDisplayValue(/select a category/i)
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(categoryInput, { target: { value: "meats"} })
        fireEvent.click(button)
        expect(categoryInput.value).toBe("Select a category...")
    })
    
    it('should clear quantity input after button click', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const quantityInput = screen.getByPlaceholderText(/quantity/i)
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(quantityInput, { target: { value: "16"} })
        fireEvent.click(button)
        expect(quantityInput.value).toBe("")
    })
    
    it('should clear measurement input after button click', () => {
        render(<NewRecipeIngredientForm recipe={{id:1}} onAddIngredientState={mockfn} />);
        const measurementInput = screen.getByDisplayValue(/select a measurement/i)
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(measurementInput, { target: { value: "ounces"} })
        fireEvent.click(button)
        expect(measurementInput.value).toBe("Select a measurement...")
    })
})