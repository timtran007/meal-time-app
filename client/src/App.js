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
    //write function to set the state of the deleted followingship
  }

  function onSubmitNewRecipe(newRecipe) {
    //write function to set the new state of user to include this new recipe
  }

  function onDeleteRecipe(deletedRecipe) {
    //write function to set the new state of user based on the deleted recipe
  }

  function onSubmitEditRecipe(editedRecipe) {
    //write function to set new state of the user based on the edited recipe of the user, user.recipes.find
  }

  function onAddRecipeIngredient(newRecipeIngredient) {
    //write function to set new state of the user based on the added recipe's ingredient.. user.recipe.find .ingredients
  }

  function onEditRecipeIngredient(editedRecipeIngredient) {
    //write function to set new state of the user based on the edited recipe's ingredient.. user.recipe.find .ingredients
  }

  function onDeleteRecipeIngredient(deletedRecipeIngredient) {
    //write function to set new state of the user based on the deleted recipe's ingredient
  }

  function onSubmitNewList(newShoppingList) {
    //write function to set new state of the user based on the new shopping list that was added.
  }

  function onDeleteShoppingList(deletedList) {
    //write function to set new state of the user based on the deleted shopping list
  }

  function onAddNewListIngredient(newIngredient) {
    //write fuction to set state of the user with a new ingredient added to their shopping lists
  }

  function onDeleteListIngredient(deletedIngredient) {
    //write function to set state of the user with the deleted ingredient filtered out of the their shopping lists
  }

  function onFollowUser(newFollowingShip){
    debugger
    // adding user_2
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
