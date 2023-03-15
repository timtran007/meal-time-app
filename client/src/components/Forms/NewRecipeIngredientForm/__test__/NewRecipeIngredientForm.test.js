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
})