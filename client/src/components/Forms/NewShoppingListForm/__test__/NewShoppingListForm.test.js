import { render, screen, fireEvent } from '@testing-library/react';
import NewShoppingListForm from '../NewShoppingListForm'

describe('render new shopping list form', () => {

    it('renders name input', () => {
        render(<NewShoppingListForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        expect(nameInput).toBeInTheDocument()
    })
    
})

describe('new shopping lists form functionality', () => {
    it('should be able to type into name input', () => {
        render(<NewShoppingListForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        fireEvent.change(nameInput, { target: { value: "Monday's Grocery List"} })
        expect(nameInput).toBe("ribeye steak")
    })
    
    //clears out the the input fields once button is clicked

    it('should clear name input after button click', () => {
        render(<NewShoppingListForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(nameInput, { target: { value: "Monday's Grocery List"} })
        fireEvent.click(button)
        expect(nameInput).toBe("")
    })
    
})