import { render, screen } from '@testing-library/react';
import ProfileRecipesPage from '../ProfileRecipesPage'

it('renders the ProfileRecipes page successfully', () => {
  render(<ProfileRecipesPage />);
  const heading = screen.getByRole('heading', {name: /my recipes/i});
  expect(heading).toBeInTheDocument();
});