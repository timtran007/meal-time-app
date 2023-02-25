import { render, screen } from '@testing-library/react';
import CreateNewRecipePage from '../CreateNewRecipePage';

it('renders the page successfully', () => {
  render(<CreateNewRecipePage />);
  const heading = screen.getByRole('heading', { name: /create new recipe/i });
  expect(heading).toBeInTheDocument();
});

it('renders the NewRecipeForm component', () => {
  render(<CreateNewRecipePage />);
  const form = screen.getByRole('form', {name: /new recipe form/i})
})