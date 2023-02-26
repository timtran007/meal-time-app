import { render, screen, fireEvent } from '@testing-library/react';
import NewShoppingListIngredientForm from '../NewShoppingListIngredientForm'

describe('render new shopping list ingredients form', () => {

    it('renders name input', () => {
        render(<NewShoppingListIngredientForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        expect(nameInput).toBeInTheDocument()
    })

    it('renders category input', () => {
        render(<NewShoppingListIngredientForm />);
        const categoryInput = screen.getByLabelText({ name: /category/i })
        expect(categoryInput).toBeInTheDocument()
    })
    
})

describe('new shopping list ingredient form functionality', () => {
    it('should be able to type into name input', () => {
        render(<NewShoppingListIngredientForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        fireEvent.change(nameInput, { target: { value: "ribeye steak"} })
        expect(nameInput).toBe("ribeye steak")
    })
    
    it('should be able to type into category input', () => {
        render(<NewShoppingListIngredientForm />);
        const categoryInput = screen.getByLabelText({ name: /category/i })
        fireEvent.change(categoryInput, { target: { value: "meats"} })
        expect(categoryInput).toBe("meats")
    })
    

    //clears out the the input fields once button is clicked

    it('should clear name input after button click', () => {
        render(<NewShoppingListIngredientForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(nameInput, { target: { value: "ribeye"} })
        fireEvent.click(button)
        expect(nameInput).toBe("")
    })
    
    it('should clear category input after button click', () => {
        render(<NewShoppingListIngredientForm />);
        const categoryInput = screen.getByLabelText({ name: /category/i })
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(categoryInput, { target: { value: "meats"} })
        fireEvent.click(button)
        expect(categoryInput).toBe("")
    })
    
})