import { render, screen, fireEvent } from '@testing-library/react';
import NewRecipeIngredientForm from '../NewRecipeIngredientForm'

describe('render new recipe ingredients form', () => {

    it('renders name input', () => {
        render(<NewRecipeIngredientForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        expect(nameInput).toBeInTheDocument()
    })

    it('renders category input', () => {
        render(<NewRecipeIngredientForm />);
        const categoryInput = screen.getByLabelText({ name: /category/i })
        expect(categoryInput).toBeInTheDocument()
    })

    it('renders quantity input', () => {
        render(<NewRecipeIngredientForm />);
        const quantityInput = screen.getByLabelText({ name: /quantity/i })
        expect(quantityInput).toBeInTheDocument()
    })

    it('renders measurement input', () => {
        render(<NewRecipeIngredientForm />);
        const measurementInput = screen.getByLabelText({ name: /measurement/i })
        expect(measurementInput).toBeInTheDocument()
    })
    
})

describe('new recipe ingredient form functionality', () => {
    it('should be able to type into name input', () => {
        render(<NewRecipeIngredientForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        fireEvent.change(nameInput, { target: { value: "ribeye steak"} })
        expect(nameInput).toBe("ribeye steak")
    })
    
    it('should be able to type into category input', () => {
        render(<NewRecipeIngredientForm />);
        const categoryInput = screen.getByLabelText({ name: /category/i })
        fireEvent.change(categoryInput, { target: { value: "meats"} })
        expect(categoryInput).toBe("meats")
    })
    
    it('should be able to type into quantity input', () => {
        render(<NewRecipeIngredientForm />);
        const quantityInput = screen.getByLabelText({ name: /quantity/i })
        fireEvent.change(quantityInput, { target: { value: "16"} })
        expect(quantityInput).toBe("16")
    })
    
    it('should be able to type into measurement input', () => {
        render(<NewRecipeIngredientForm />);
        const measurementInput = screen.getByLabelText({ name: /measurement/i })
        fireEvent.change(measurementInput, { target: { value: "ounces"} })
        expect(measurementInput).toBe("ounces")
    })

    //clears out the the input fields once button is clicked

    it('should clear name input after button click', () => {
        render(<NewRecipeIngredientForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(nameInput, { target: { value: "ribeye"} })
        fireEvent.click(button)
        expect(nameInput).toBe("")
    })
    
    it('should clear category input after button click', () => {
        render(<NewRecipeIngredientForm />);
        const categoryInput = screen.getByLabelText({ name: /category/i })
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(categoryInput, { target: { value: "meats"} })
        fireEvent.click(button)
        expect(categoryInput).toBe("")
    })
    
    it('should clear quantity input after button click', () => {
        render(<NewRecipeIngredientForm />);
        const quantityInput = screen.getByLabelText({ name: /quantity/i })
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(quantityInput, { target: { value: "16"} })
        fireEvent.click(button)
        expect(quantityInput).toBe("")
    })
    
    it('should clear measurement input after button click', () => {
        render(<NewRecipeIngredientForm />);
        const measurementInput = screen.getByLabelText({ name: /measurement/i })
        const button = screen.getByRole( 'button', { name: /add ingredient/i})
        fireEvent.change(measurementInput, { target: { value: "ounces"} })
        fireEvent.click(button)
        expect(measurementInput).toBe("")
    })
})