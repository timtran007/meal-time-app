import { render, screen } from '@testing-library/react';
import ProfilePage from '../ProfilePage'

it('renders the Profile page successfully', () => {
  render(<ProfilePage />);
  const element = screen.getByText(/followers/i);
  expect(element).toBeInTheDocument();
});