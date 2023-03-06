import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailedRecipeCard from './components/Cards/DetailedRecipeCard/DetailedRecipeCard';
import UserDetailedRecipeCard from './components/Cards/UserDetailedRecipeCard/UserDetailedRecipeCard';
import Navigation from './components/Navigation/Navigation';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipePage from './pages/RecipePage/RecipePage';
import SignupPage from './pages/SignupPage/SignupPage';
import UserPage from './pages/UserPage/UserPage';
import UserRecipesPage from './pages/UserRecipesPage/UserRecipesPage';
import UserShoppingListsPage from './pages/UserShoppingListsPage/UserShoppingListsPage';
import RecipeHomePage from './pages/RecipeHomePage/RecipeHomePage'

function App() {

  //user state
  const [user, setUser] = useState(null)

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('/me')
    .then(resp => {
      if(resp.ok) {
        resp.json().then(userData => setUser(userData))
      }
    })
  }, [])
  
  useEffect(() => {
    fetch('/recipes')
    .then(resp => resp.json())
    .then(data => setRecipes(data))
  }, [])

  
  function onDeleteFollowingShip(deletedUser) {
    
    const updatedFollowing = user.following
      .filter(following => following.id !== deletedUser.user_2.id)
    const updatedUser = {
      ...user, 
      following: updatedFollowing
    }

    setUser(updatedUser)
  
  }

  function onFollowUser(newFollowingShip){
    
    //take the spread of user.following and attach newFollowingShip.user_2
    //take the spread of following_ships and add in newFollowingShip
    const updatedFollowing = [
      ...user.following,
      newFollowingShip.user_2
    ]
    const updatedFollowingShip = [
      ...user.following_ships,
      newFollowingShip
    ]

    const updatedUser = {
      ...user,
      following: updatedFollowing,
      following_ships: updatedFollowingShip
    }
    setUser(updatedUser)
    
  }

  function onSubmitNewRecipe(newRecipe) {
    const updatedRecipes = [
      ...user.recipes,
      newRecipe
    ]

    const updatedUser = {
      ...user,
      recipes: updatedRecipes
    }
    setUser(updatedUser)
    
  }

  function onDeleteRecipe(deletedRecipe) {
    const updatedRecipes = user.recipes.filter(r => r.id !== deletedRecipe.id)
    const updatedUser = {
      ...user, 
      recipes: updatedRecipes
    }
    setUser(updatedUser)
  }

  function onSubmitEditRecipe(editedRecipe) {
    const updatedRecipes = user.recipes.map(r => {
      if(r.id === editedRecipe.id){
        return(
          editedRecipe
        )
      } else{
        return(
          r
        )
      }
    }) 
    
    const updatedUser = {
      ...user,
      recipes: updatedRecipes
    }

    setUser(updatedUser)
    
  }

  function onAddRecipeIngredient(newRecipeIngredient) {
    debugger
    //write function to set new state of the user based on the added recipe's ingredient.. user.recipe.find .ingredients
  }

  function onEditRecipeIngredient(editedRecipeIngredient) {
    debugger
    //write function to set new state of the user based on the edited recipe's ingredient.. user.recipe.find .ingredients
  }

  function onDeleteRecipeIngredient(deletedRecipeIngredient) {
    debugger
    //write function to set new state of the user based on the deleted recipe's ingredient
  }

  function onSubmitNewList(newShoppingList) {
    debugger
    //write function to set new state of the user based on the new shopping list that was added.
  }

  function onDeleteShoppingList(deletedList) {
    debugger
    //write function to set new state of the user based on the deleted shopping list
  }

  function onAddNewListIngredient(newIngredient) {
    debugger
    //write function to set state of the user with a new ingredient added to their shopping lists
  }

  function onDeleteListIngredient(deletedIngredient) {
    debugger
    //write function to set state of the user with the deleted ingredient filtered out of the their shopping lists
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <Navigation user={user} setUser={setUser} />
        <h1>Welcome to Meal Time</h1>
        
        <Switch>
          <Route exact path='/'>
            { user ? <RecipePage recipes={recipes} user={user} following={user.following} onFollowUser={onFollowUser}/> : <RecipeHomePage recipes={recipes}/>}
          </Route>
          <Route path='/recipes/:recipe_id'>
            <DetailedRecipeCard recipes={recipes}/>
          </Route>
          <Route exact path='/profile'>
            {user ? <UserPage user={user} followers={user.followers} following={user.following} onDeleteFollowingShip={onDeleteFollowingShip}/> : "loading"}
          </Route>
          <Route exact path='/profile/recipes'>
            {user ? <UserRecipesPage userRecipes={user.recipes} onSubmitNewRecipe={onSubmitNewRecipe} onDeleteRecipe={onDeleteRecipe}/> : "loading"}
          </Route>
          <Route path='/profile/recipes/:recipe_id'>
            {user ? <UserDetailedRecipeCard userRecipes={user.recipes} onSubmitEditRecipe={onSubmitEditRecipe} onAddRecipeIngredient={onAddRecipeIngredient} onEditRecipeIngredient={onEditRecipeIngredient} onDeleteRecipeIngredient={onDeleteRecipeIngredient}/>: "loading"}
          </Route>
          <Route path='/profile/shopping-lists'>
            {user ? <UserShoppingListsPage user={user} onSubmitNewList={onSubmitNewList} onDeleteShoppingList={onDeleteShoppingList} onAddNewListIngredient={onAddNewListIngredient} onDeleteListIngredient={onDeleteListIngredient}/> : "loading"}
          </Route>

          <Route path='/login'>
            <LoginPage onLogin={setUser}/>
          </Route>
          <Route path='/sign-up'>
            <SignupPage onSignup={setUser}/>
          </Route>
        </Switch>
      
        
      </header>
    </div>
  );
}

export default App;
