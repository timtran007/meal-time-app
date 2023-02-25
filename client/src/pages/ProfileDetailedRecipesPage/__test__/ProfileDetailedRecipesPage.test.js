import { render, screen } from '@testing-library/react';
import ProfileDetailedRecipesPage from '../ProfileDetailedRecipesPage'

it('renders the ProfileDetailedRecipes page successfully', () => {
  render(<ProfileDetailedRecipesPage />);
  const heading = screen.getByRole('heading', {name: /my recipe/i});
  expect(heading).toBeInTheDocument();
});

