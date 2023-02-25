import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage'

it('renders the login page successfully', () => {
  render(<LoginPage />);
  const heading = screen.getByRole('heading', {name: /login/i});
  expect(heading).toBeInTheDocument();
});

it('renders the LoginForm component', () => {
    render(<CreateNewRecipePage />);
    const form = screen.getByRole('form', {name: /login form/i})
  })