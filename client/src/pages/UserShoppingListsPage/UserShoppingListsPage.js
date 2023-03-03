import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import ShoppingListCard from '../../components/Cards/ShoppingListCard/ShoppingListCard'
import NewShoppingListIngredientForm from '../../components/Forms/NewShoppingListIngredientForm/NewShoppingListIngredientForm'
import NewShoppingListForm from '../../components/Forms/NewShoppingListForm/NewShoppingListForm'

function UserShoppingListsPage({user, onSubmitNewList, onDeleteShoppingList, onAddNewListIngredient, onDeleteListIngredient}) {

  const [showAddListForm, setAddListForm] = useState(false)
  const [errors, setErrors] = useState([])

  function handleShowForm(e) {
    setAddListForm(!showAddListForm)
  }

  function handleDeleteList(e) {
    // delete request & update state from App of user to delete the Shopping List
    const shoppingListId = e.target.id
    fetch(`/shopping_lists/${shoppingListId}`, {
      method: "DELETE"
    })
    .then(resp => {
      if(resp.ok) {
        resp.json().then( deletedList => onDeleteShoppingList(deletedList))
      } else {
        resp.json().then( error => setErrors(error.errors))
      }
    })
  }
  
  const displayError = errors.map( e => {
    return(
        <p key={e} style={{color:"red"}}>{e}</p>
    )
  })

  return (
    <div>
        <h2>My Shopping Lists</h2>
        <Button onClick={handleShowForm}>Add a Shopping List</Button>
        <div>{displayError}</div>
        {showAddListForm ? <NewShoppingListForm user={user} onSubmitNewList={onSubmitNewList}/> : null}
        {user.shopping_lists.map(shopping_list => {
            return(
                <div key={shopping_list.id}>
                    <ShoppingListCard shopping_list={shopping_list} onDeleteListIngredient={onDeleteListIngredient}/>
                    <NewShoppingListIngredientForm onAddNewListIngredient={onAddNewListIngredient} shopping_list={shopping_list}/>
                    <Button id={shopping_list.id} onClick={handleDeleteList}>delete list</Button>
                </div>
            )
        })}
    </div>

  )
}

export default UserShoppingListsPage