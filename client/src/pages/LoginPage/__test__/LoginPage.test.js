import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../LoginPage'

const MockLogin = () => {
  return(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  )
}

it('renders the login page successfully', () => {
  render(<MockLogin />);
  const heading = screen.getByRole('heading', {name: /log into your account/i});
  expect(heading).toBeInTheDocument();
});

it('renders the LoginForm component', () => {
    render(<MockLogin />);
    const form = screen.getByRole('button', {name: /login/i})
  })

it("renders the text don't have an account yet sign up here", () => {
    render(<MockLogin />);
    const text = screen.getByText(/don't have an account yet?/i)
    expect(text).toBeInTheDocument();
})