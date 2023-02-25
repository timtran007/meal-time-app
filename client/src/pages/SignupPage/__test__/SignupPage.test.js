import { render, screen } from '@testing-library/react';
import SignupPage from '../SignupPage'

it('renders the Signup page successfully', () => {
  render(<SignupPage />);
  const heading = screen.getByRole('heading', {name: /sign up/i});
  expect(heading).toBeInTheDocument();
});

it('renders the signup page form successfully', () => {
    render(<SignupPage />);
    const form = screen.getByRole('form', {name: /sign up/i});
    expect(form).toBeInTheDocument();
  });

  it("renders the text have an account already?", () => {
    render(<SignupPage />);
    const text = screen.getByText(/have an account already?/i)
    expect(text).toBeInTheDocument();
})