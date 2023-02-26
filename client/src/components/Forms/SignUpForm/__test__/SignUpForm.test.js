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
        const passwordInput = screen.getByLabelText(/password/i)
        expect(passwordInput).toBeInTheDocument()
    })

    it('renders input of passwordConfirmation', () => {
        render(<SignUpForm />);
        const passwordConfirmationInput = screen.getByLabelText(/password confirmation/i)
        expect(passwordConfirmationInput).toBeInTheDocument()
    })
    
})

describe('sign up functionality', () => {

    it('should be able to type into name', () => {
        render(<SignUpForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        fireEvent.change(nameInput, { target: { value: "tim tran"}})
        expect(nameInput.value).toBe("tim tran")
    })

    it('should be able to type into email', () => {
        render(<SignUpForm />);
        const emailInput = screen.getByLabelText({ name: /email/i })
        fireEvent.change(emailInput, { target: { value: "tim@gmail.com"}})
        expect(emailInput.value).toBe("tim@gmail.com")
    })

    it('should be able to type into password input', () => {
        render(<SignUpForm />);
        const passwordInput = screen.getByLabelText({ name: /password/i })
        fireEvent.change(passwordInput, { target: { value: "12345" }})
        expect(passwordInput.value).toBe("12345")
    })

    it('should be able to type into passwordConfirmation input', () => {
        render(<SignUpForm />);
        const passwordConfirmationInput = screen.getByLabelText({ name: /password confirmation/i })
        fireEvent.change(passwordConfirmationInput, { target: { value: "12345" }})
        expect(passwordConfirmationInput.value).toBe("12345")
    })

    //clear form after button click

    it('should have empty password input once sign up button is clicked', () => {
        render(<SignUpForm />);
        const nameInput = screen.getByLabelText({ name: /name/i })
        const button = screen.getByRole('button', { name: /sign up/i })
        fireEvent.change(nameInput, { target: { value: "tim tran"}})
        fireEventf.click(button)
        expect(nameInput.value).toBe("")
    })

    it('should have empty email input once sign up button is clicked', () => {
        render(<SignUpForm />);
        const emailInput = screen.getByLabelText(/email/i)
        const button = screen.getByRole('button', { name: /sign up/i })
        fireEvent.change(emailInput, { target: { value: "tim@gmail.com"}})
        fireEventf.click(button)
        expect(emailInput.value).toBe("")
    })

    it('should have empty password input once sign up button is clicked', () => {
        const passwordInput = screen.getByLabelText({ name: /password/i })
        const button = screen.getByRole('button', { name: /sign up/i })
        fireEvent.change(passwordInput, { target: { value: "12345" }})
        fireEvent.click(button)
        expect(passwordInput).toBe('')
    })

    it('should have empty password input once sign up button is clicked', () => {
        render(<SignUpForm />);
        const passwordConfirmationInput = screen.getByLabelText({ name: /password confirmation/i })
        const button = screen.getByRole('button', { name: /sign up/i })
        fireEvent.change(passwordConfirmationInput, { target: { value: "12345" }})
        fireEventf.click(button)
        expect(passwordConfirmationInput.value).toBe("")
    })
})