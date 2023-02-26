import { render, screen } from '@testing-library/react';
import UserShoppingListsPage from '../UserShoppingListsPage'

it('renders the UserShoppingLists page successfully', () => {
  render(<UserShoppingListsPage />);
  const heading = screen.getByRole('heading', {name: /my shopping lists/i});
  expect(heading).toBeInTheDocument();
});