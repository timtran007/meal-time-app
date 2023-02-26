import { render, screen } from '@testing-library/react';
import RecipePage from '../RecipePage'


it('renders the Recipes page successfully', () => {
  render(<RecipePage />);
  const heading = screen.getByRole('heading', {name: /recipe/i});
  expect(heading).toBeInTheDocument();
});

it('renders renders out the recipe cards', () => {
    render(<RecipePage />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
