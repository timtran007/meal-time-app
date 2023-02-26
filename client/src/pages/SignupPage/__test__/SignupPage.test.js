import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignupPage from '../SignupPage'

const MockSignUp = () => {
  return(
  <BrowserRouter>
    <SignupPage />
  </BrowserRouter>
  )
}


it('renders the Signup page successfully', () => {
  render(<MockSignUp />);
  const heading = screen.getByRole('heading', {name: /sign up/i});
  expect(heading).toBeInTheDocument();
});

it('renders the signup page form successfully', () => {
    render(<MockSignUp />);
    const button = screen.getByRole('button', {name: /sign up/i});
    expect(button).toBeInTheDocument();
  });

  it("renders the text have an account already?", () => {
    render(<MockSignUp />);
    const text = screen.getByText(/have an account/i)
    expect(text).toBeInTheDocument();
})