import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from '../SignUpForm'

describe('render sign up form', () => {

    it('renders input of name', () => {
        render(<SignUpForm />);
        const nameInput = screen.getByLabelText(/name/i)
        expect(nameInput).toBeInTheDocument()
    })

    it('renders input of email', () => {
        render(<SignUpForm />);
        const emailInput = screen.getByLabelText(/email/i)
        expect(emailInput).toBeInTheDocument()
    })

    it('renders input of password', () => {
        render(<SignUpForm />);
        const passwordInput = screen.getByLabelText("Password:")
        expect(passwordInput).toBeInTheDocument()
    })

    it('renders input of passwordConfirmation', () => {
        render(<SignUpForm />);
        const passwordConfirmationInput = screen.getByLabelText("Password Confirmation:")
        expect(passwordConfirmationInput).toBeInTheDocument()
    })
    
})

describe('sign up functionality', () => {

    it('should be able to type into name', () => {
        render(<SignUpForm />);
        const nameInput = screen.getByLabelText(/name/i)
        fireEvent.change(nameInput, { target: { value: "tim tran"}})
        expect(nameInput.value).toBe("tim tran")
    })

    it('should be able to type into email', () => {
        render(<SignUpForm />);
        const emailInput = screen.getByLabelText(/email/i)
        fireEvent.change(emailInput, { target: { value: "tim@gmail.com"}})
        expect(emailInput.value).toBe("tim@gmail.com")
    })

    it('should be able to type into password input', () => {
        render(<SignUpForm />);
        const passwordInput = screen.getByLabelText("Password:")
        fireEvent.change(passwordInput, { target: { value: "12345" }})
        expect(passwordInput.value).toBe("12345")
    })

    it('should be able to type into passwordConfirmation input', () => {
        render(<SignUpForm />);
        const passwordConfirmationInput = screen.getByLabelText("Password Confirmation:")
        fireEvent.change(passwordConfirmationInput, { target: { value: "12345" }})
        expect(passwordConfirmationInput.value).toBe("12345")
    })

    //clear form after button click

    it('should have empty name input once sign up button is clicked', () => {
        render(<SignUpForm />);
        const nameInput = screen.getByLabelText(/name/i)
        const button = screen.getByRole('button', { name: /sign up/i })
        fireEvent.change(nameInput, { target: { value: "tim tran"}})
        fireEvent.click(button)
        expect(nameInput.value).toBe("")
    })

    it('should have empty email input once sign up button is clicked', () => {
        render(<SignUpForm />);
        const emailInput = screen.getByLabelText(/email/i)
        const button = screen.getByRole('button', { name: /sign up/i })
        fireEvent.change(emailInput, { target: { value: "tim@gmail.com"}})
        fireEvent.click(button)
        expect(emailInput.value).toBe("")
    })

    it('should have empty password input once sign up button is clicked', () => {
        render(<SignUpForm />);
        const passwordInput = screen.getByLabelText("Password:")
        const button = screen.getByRole('button', { name: /sign up/i })
        fireEvent.change(passwordInput, { target: { value: "12345" }})
        fireEvent.click(button)
        expect(passwordInput.value).toBe('')
    })

    it('should have empty passwordConfirmation input once sign up button is clicked', () => {
        render(<SignUpForm />);
        const passwordConfirmationInput = screen.getByLabelText("Password Confirmation:")
        const button = screen.getByRole('button', { name: /sign up/i })
        fireEvent.change(passwordConfirmationInput, { target: { value: "12345" }})
        fireEvent.click(button)
        expect(passwordConfirmationInput.value).toBe("")
    })
})