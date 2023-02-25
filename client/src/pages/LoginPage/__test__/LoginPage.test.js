import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage'

it('renders the login page successfully', () => {
  render(<LoginPage />);
  const heading = screen.getByRole('heading', {name: /login/i});
  expect(heading).toBeInTheDocument();
});

it('renders the LoginForm component', () => {
    render(<LoginPage />);
    const form = screen.getByRole('form', {name: /login form/i})
  })

it("renders the text don't have an account yet sign up here", () => {
    render(<LoginPage />);
    const text = screen.getByText(/don't have an account yet?/i)
    expect(text).toBeInTheDocument();
})