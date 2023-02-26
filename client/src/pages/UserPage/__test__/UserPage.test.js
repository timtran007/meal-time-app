import { render, screen } from '@testing-library/react';
import UserPage from '../UserPage'

it('renders the User page successfully', () => {
  render(<UserPage />);
  const element = screen.getByText(/followers/i);
  expect(element).toBeInTheDocument();
});