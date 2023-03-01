import React from 'react'
import ShoppingListCard from '../../components/Cards/ShoppingListCard/ShoppingListCard'

function UserShoppingListsPage({user}) {
  return (
    <div>
        <h2>My Shopping Lists</h2>
        {user.shopping_lists.map(shopping_list => {
            return(
                <div key={shopping_list.id}>
                    <ShoppingListCard shopping_list={shopping_list}/>
                </div>
            )
        })}
    </div>

  )
}

export default UserShoppingListsPage