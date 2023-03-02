import { render, screen, fireEvent } from '@testing-library/react';
import EditRecipeIngredientForm from '../EditRecipeIngredientForm'
const recipeProp = {
    id: 1,
    title: 'cilantro',
    recipe_ingredients: [{
        name: 'lemon',
        category: 'produce',
        quantity: '1',
        measurement: 'cup/cups',
        id: 1,
        recipe_id: 1
    }]
}
const ingredient = {
    name: 'lemon',
    category: 'produce',
    id: 1,
    recipe_id: 1
}
describe('render new recipe ingredients form', () => {

    it('renders name input', () => {
        render(<EditRecipeIngredientForm ingredient={ingredient} recipe={recipeProp} ingredientId={1} onEditRecipeIngredient={jest.fn()} />);
        const nameInput = screen.getByPlaceholderText(/name/i)
        expect(nameInput).toBeInTheDocument()
    })

    it('renders category input', () => {
        render(<EditRecipeIngredientForm recipe={recipeProp} ingredient={ingredient} ingredientId={1} onEditRecipeIngredient={jest.fn()} />);
        const categoryInput = screen.getByDisplayValue(/produce/i)
        expect(categoryInput).toBeInTheDocument()
    })

    it('renders quantity input', () => {
        render(<EditRecipeIngredientForm recipe={recipeProp} ingredient={ingredient} ingredientId={1} onEditRecipeIngredient={jest.fn()} />);
        const quantityInput = screen.getByPlaceholderText(/quantity/i)
        expect(quantityInput).toBeInTheDocument()
    })

    it('renders measurement input', () => {
        render(<EditRecipeIngredientForm recipe={recipeProp} ingredient={ingredient} ingredientId={1} onEditRecipeIngredient={jest.fn()} />);
        const measurementInput = screen.getByDisplayValue(/cup/i)
        expect(measurementInput).toBeInTheDocument()
    })
    
})

describe('new recipe ingredient form functionality', () => {
    it('should be able to type into name input', () => {
        render(<EditRecipeIngredientForm recipe={recipeProp} ingredient={ingredient} ingredientId={1} onEditRecipeIngredient={jest.fn()} />);
        const nameInput = screen.getByPlaceholderText(/name/i)
        fireEvent.change(nameInput, { target: { value: "ribeye steak"} })
        expect(nameInput.value).toBe("ribeye steak")
    })
    
    it('should be able to type into category input', () => {
        render(<EditRecipeIngredientForm recipe={recipeProp} ingredient={ingredient} ingredientId={1} onEditRecipeIngredient={jest.fn()} />);
        const categoryInput = screen.getByDisplayValue(/produce/i)
        fireEvent.change(categoryInput, { target: { value: "meats"} })
        expect(categoryInput.value).toBe("meats")
    })
    
    it('should be able to type into quantity input', () => {
        render(<EditRecipeIngredientForm recipe={recipeProp} ingredient={ingredient} ingredientId={1} onEditRecipeIngredient={jest.fn()} />);
        const quantityInput = screen.getByPlaceholderText(/quantity/i)
        fireEvent.change(quantityInput, { target: { value: "16"} })
        expect(quantityInput.value).toBe("16")
    })
    
    it('should be able to type into measurement input', () => {
        render(<EditRecipeIngredientForm recipe={recipeProp} ingredient={ingredient} ingredientId={1} onEditRecipeIngredient={jest.fn()} />);
        const measurementInput = screen.getByDisplayValue(/cup/i)
        fireEvent.change(measurementInput, { target: { value: "ounce/ounces"} })
        expect(measurementInput.value).toBe("ounce/ounces")
    })
})