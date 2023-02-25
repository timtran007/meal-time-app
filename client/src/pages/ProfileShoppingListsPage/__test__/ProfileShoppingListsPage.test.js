import { render, screen } from '@testing-library/react';
import ProfileShoppingListsPage from '../ProfileShoppingListsPage'

it('renders the ProfileShoppingLists page successfully', () => {
  render(<ProfileShoppingListsPage />);
  const heading = screen.getByRole('heading', {name: /my shopping lists/i});
  expect(heading).toBeInTheDocument();
});