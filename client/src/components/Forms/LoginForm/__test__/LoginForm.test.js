import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm'

describe('render login form', () => {

    it('renders input of email', () => {
        render(<LoginForm />);
        const emailInput = screen.getByLabelText(/email/i)
        expect(emailInput).toBeInTheDocument()
    })

    it('renders input of password', () => {
        render(<LoginForm />);
        const passwordInput = screen.getByLabelText(/password/i)
        expect(passwordInput).toBeInTheDocument()
    })
    
})

describe('login functionality', () => {
    it('should be able to type into email', () => {
        render(<LoginForm />);
        const emailInput = screen.getByLabelText({ name: /email/i })
        fireEvent.change(emailInput, { target: { value: "tim@gmail.com"}})
        expect(emailInput.value).toBe("tim@gmail.com")
    })

    it('should be able to type into password input', () => {
        render(<LoginForm />);
        const passwordInput = screen.getByLabelText({ name: /password/i })
        fireEvent.change(passwordInput, { target: { value: "12345" }})
        expect(passwordInput.value).toBe("12345")
    })

    it('should have empty email input once login button is clicked', () => {
        render(<LoginForm />);
        const emailInput = screen.getByLabelText(/email/i)
        const button = screen.getByRole('button', { name: /login/i })
        fireEvent.change(emailInput, { target: { value: "tim@gmail.com"}})
        fireEventf.click(button)
        expect(emailInput.value).toBe("")
    })

    it('should have empty password input once login button is clicked', () => {
        const passwordInput = screen.getByLabelText({ name: /password/i })
        const button = screen.getByRole('button', { name: /login/i })
        fireEvent.change(passwordInput, { target: { value: "12345" }})
        fireEvent.click(button)
        expect(passwordInput).toBe('')
    })
})