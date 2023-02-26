import { render, screen } from '@testing-library/react';
import UserDetailedRecipesPage from '../UserDetailedRecipesPage'

it('renders the UserDetailedRecipes page successfully', () => {
  render(<UserDetailedRecipesPage />);
  const heading = screen.getByRole('heading', {name: /my recipe/i});
  expect(heading).toBeInTheDocument();
});

