import { render, screen } from '@testing-library/react';
import UserShoppingListsPage from '../UserShoppingListsPage'

const userProps = {
    id: 1,
    name: "Tim",
    email: "tim@gmail.com",
    image_url: null,
    shopping_lists: [
      {
      id: 1,
      name: "Mondays Groceries",
      ingredients: [
        {
        id: 1,
        name: "ribeye",
        category: "meats",
        quantity: "16",
        measurement: "ounce/ounces",
        shopping_list_id: 1,
        created_at: "2023-02-27T04:52:54.662Z",
        updated_at: "2023-02-27T04:52:54.662Z"
        },
        {
        id: 2,
        name: "salt",
        category: "spices",
        quantity: "1",
        measurement: "tablespoon",
        shopping_list_id: 1,
        created_at: "2023-02-27T04:52:54.694Z",
        updated_at: "2023-02-27T04:52:54.694Z"
        },
        {
        id: 3,
        name: "pepper",
        category: "spices",
        quantity: "1",
        measurement: "teaspoon",
        shopping_list_id: 1,
        created_at: "2023-02-27T04:52:54.715Z",
        updated_at: "2023-02-27T04:52:54.715Z"
        },
        {
        id: 4,
        name: "butter",
        category: "dairy",
        quantity: "1",
        measurement: "tablespoon",
        shopping_list_id: 1,
        created_at: "2023-02-27T04:52:54.751Z",
        updated_at: "2023-02-27T04:52:54.751Z"
        },
        {
        id: 5,
        name: "lime",
        category: "produce",
        quantity: "3",
        measurement: "individual",
        shopping_list_id: 1,
        created_at: "2023-02-27T04:52:54.788Z",
        updated_at: "2023-02-27T04:52:54.788Z"
        },
        {
        id: 6,
        name: "condensed milk",
        category: "baking",
        quantity: "1/3",
        measurement: "cup",
        shopping_list_id: 1,
        created_at: "2023-02-27T04:52:54.792Z",
        updated_at: "2023-02-27T04:52:54.792Z"
        },
        {
        id: 7,
        name: "sugar",
        category: "baking",
        quantity: "1/3",
        measurement: "cup",
        shopping_list_id: 1,
        created_at: "2023-02-27T04:52:54.813Z",
        updated_at: "2023-02-27T04:52:54.813Z"
        },
        {
        id: 8,
        name: "water",
        category: "drinks",
        quantity: "4",
        measurement: "cup",
        shopping_list_id: 1,
        created_at: "2023-02-27T04:52:54.849Z",
        updated_at: "2023-02-27T04:52:54.849Z"
        }
      ] 
    }]
  
}

it('renders the UserShoppingLists page successfully', async () => {
  render(<UserShoppingListsPage user={userProps}/>);
  const heading = await screen.findByRole('heading', {name: /my shopping lists/i});
  expect(heading).toBeInTheDocument();
});