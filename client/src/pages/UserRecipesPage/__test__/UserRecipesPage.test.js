import { render, screen } from '@testing-library/react';
import UserRecipesPage from '../UserRecipesPage'

it('renders the UserRecipes page successfully', () => {
  render(<UserRecipesPage />);
  const heading = screen.getByRole('heading', {name: /my recipes/i});
  expect(heading).toBeInTheDocument();
});