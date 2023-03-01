import React from 'react'
import Button from 'react-bootstrap/Button'
import ShoppingListCard from '../../components/Cards/ShoppingListCard/ShoppingListCard'
import NewShoppingListIngredientForm from '../../components/Forms/NewShoppingListIngredientForm/NewShoppingListIngredientForm'

function UserShoppingListsPage({user}) {
  return (
    <div>
        <h2>My Shopping Lists</h2>
        <Button onClick={() => {}}>Add a Shopping List</Button>
        {user.shopping_lists.map(shopping_list => {
            return(
                <div key={shopping_list.id}>
                    <ShoppingListCard shopping_list={shopping_list}/>
                    <NewShoppingListIngredientForm />
                    <Button onClick={() => {}}>delete list</Button>
                </div>
            )
        })}
    </div>

  )
}

export default UserShoppingListsPage