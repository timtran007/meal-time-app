import { render, screen, fireEvent } from '@testing-library/react';
import NewRecipeForm from '../NewRecipeForm'

describe('render new recipe form', () => {

    it('renders title input', () => {
        render(<NewRecipeForm />);
        const titleInput = screen.getByLabelText(/title/i)
        expect(titleInput).toBeInTheDocument()
    })

    it('renders imageUrl input', () => {
        render(<NewRecipeForm />);
        const imageUrlInput = screen.getByLabelText(/image url/i)
        expect(imageUrlInput).toBeInTheDocument()
    })

    it('renders cookTimeInMinutes input', () => {
        render(<NewRecipeForm />);
        const cookTimeInMinutesInput = screen.getByLabelText(/cook time in minutes/i)
        expect(cookTimeInMinutesInput).toBeInTheDocument()
    })

    it('renders prepTimeInMinutes input', () => {
        render(<NewRecipeForm />);
        const prepTimeInMinutesInput = screen.getByLabelText(/prep time/i)
        expect(prepTimeInMinutesInput).toBeInTheDocument()
    })
    
})

describe('new recipe form functionality', () => {
    it('should be able to type into title input', () => {
        render(<NewRecipeForm />);
        const titleInput = screen.getByLabelText(/title/i)
        fireEvent.change(titleInput, { target: { value: "best steak restaurant"} })
        expect(titleInput.value).toBe("best steak restaurant")
    })
    
    it('should be able to type into imageUrl input', () => {
        render(<NewRecipeForm />);
        const imageUrlInput = screen.getByLabelText(/image url/i)
        fireEvent.change(imageUrlInput, { target: { value: "https://steakschool.com/wp-content/uploads/2020/02/Ribeye-1.jpg"} })
        expect(imageUrlInput.value).toBe("https://steakschool.com/wp-content/uploads/2020/02/Ribeye-1.jpg")
    })
    
    it('should be able to type into cookTimeInMinutes input', () => {
        render(<NewRecipeForm />);
        const cookTimeInMinutesInput = screen.getByLabelText(/cook time in minutes/i)
        fireEvent.change(cookTimeInMinutesInput, { target: { value: 15} })
        expect(cookTimeInMinutesInput.value).toBe(15)
    })
    
    it('should be able to type into prepTimeInMinutes input', () => {
        render(<NewRecipeForm />);
        const prepTimeInMinutesInput = screen.getByLabelText(/prep time/i)
        fireEvent.change(prepTimeInMinutesInput, { target: { value: 10} })
        expect(prepTimeInMinutesInput.value).toBe(10)
    })

    //clears out the the input fields once button is clicked

    it('should clear title input after button click', () => {
        render(<NewRecipeForm />);
        const titleInput = screen.getByLabelText(/title/i)
        const button = screen.getByRole( 'button', { name: /add recipe/i})
        fireEvent.change(titleInput, { target: { value: "best steak restaurant"} })
        fireEvent.click(button)
        expect(titleInput.value).toBe("")
    })
    
    it('should clear imageUrl input after button click', () => {
        render(<NewRecipeForm />);
        const imageUrlInput = screen.getByLabelText(/image url/i)
        const button = screen.getByRole( 'button', { name: /add recipe/i})
        fireEvent.change(imageUrlInput, { target: { value: "https://steakschool.com/wp-content/uploads/2020/02/Ribeye-1.jpg"} })
        fireEvent.click(button)
        expect(imageUrlInput.value).toBe("")
    })
    
    it('should clear cookTimeInMinutes input after button click', () => {
        render(<NewRecipeForm />);
        const cookTimeInMinutesInput = screen.getByLabelText(/cook time in minutes/i)
        const button = screen.getByRole( 'button', { name: /add recipe/i})
        fireEvent.change(cookTimeInMinutesInput, { target: { value: 15} })
        fireEvent.click(button)
        expect(cookTimeInMinutesInput.value).toBe(0)
    })
    
    it('should clear prepTimeInMinutes input after button click', () => {
        render(<NewRecipeForm />);
        const prepTimeInMinutesInput = screen.getByLabelText(/prep time/i)
        const button = screen.getByRole( 'button', { name: /add recipe/i})
        fireEvent.change(prepTimeInMinutesInput, { target: { value: 10} })
        fireEvent.click(button)
        expect(prepTimeInMinutesInput.value).toBe(0)
    })
})