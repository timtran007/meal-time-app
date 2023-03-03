import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import ShoppingListCard from '../../components/Cards/ShoppingListCard/ShoppingListCard'
import NewShoppingListIngredientForm from '../../components/Forms/NewShoppingListIngredientForm/NewShoppingListIngredientForm'
import NewShoppingListForm from '../../components/Forms/NewShoppingListForm/NewShoppingListForm'

function UserShoppingListsPage({user, onSubmitNewList}) {

  const [showAddListForm, setAddListForm] = useState(false)

  function handleShowForm(e) {
    setAddListForm(!showAddListForm)
  }

  function handleDelete(e) {
    // delete request & update state from App of user to delete the Shopping List
  }
  return (
    <div>
        <h2>My Shopping Lists</h2>
        <Button onClick={handleShowForm}>Add a Shopping List</Button>
        {showAddListForm ? <NewShoppingListForm user={user} onSubmitNewList={onSubmitNewList}/> : null}
        {user.shopping_lists.map(shopping_list => {
            return(
                <div key={shopping_list.id}>
                    <ShoppingListCard shopping_list={shopping_list}/>
                    <NewShoppingListIngredientForm />
                    <Button onClick={handleDelete}>delete list</Button>
                </div>
            )
        })}
    </div>

  )
}

export default UserShoppingListsPage