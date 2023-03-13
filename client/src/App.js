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
        return(editedRecipe)
      } else{
        return(r)
      }
    }) 
    
    const updatedUser = {
      ...user,
      recipes: updatedRecipes
    }

    setUser(updatedUser)
  }

  function onAddRecipeIngredient(newRecipeIngredient) {
    const targetRecipe = user.recipes.find(r => r.id === newRecipeIngredient.recipe.id)

    const updatedTargetRecipe = {
      ...targetRecipe,
      recipe_ingredients: [
        ...targetRecipe.recipe_ingredients,
        newRecipeIngredient]
    }

    const updatedRecipes = user.recipes.map( r => {
      if(r.id === newRecipeIngredient.recipe.id) {
        return (updatedTargetRecipe)
      } else {
        return(r)
      }
    })

    const updatedUser = {
      ...user, 
      recipes: updatedRecipes
    }

    setUser(updatedUser)
  }

  function onEditRecipeIngredient(editedRecipeIngredient) {
    const targetRecipe = user.recipes.find(r => r.id === editedRecipeIngredient.recipe.id)
    
    const updatedIngredients = targetRecipe.recipe_ingredients.map(i => {
      if(i.id === editedRecipeIngredient.id){
        return(editedRecipeIngredient)
      } else{
        return(i)
      }
    })

    const updatedRecipes = user.recipes.map(r => {
      if(r.id === targetRecipe.id) {
        return({
          ...targetRecipe,
          recipe_ingredients: updatedIngredients
        })
      } else{
        return(r)
      }
    })

    const updatedUser = {
      ...user, 
      recipes: updatedRecipes
    }
    
    setUser(updatedUser)
  }

  function onDeleteRecipeIngredient(deletedRecipeIngredient) {
    const targetRecipe = user.recipes.find(r => r.id === deletedRecipeIngredient.recipe.id)
    
    const updatedTargetRecipeIngredients = targetRecipe.recipe_ingredients.filter(ingredient => ingredient.id !== deletedRecipeIngredient.id)

    const updatedRecipes = user.recipes.map(r => {
      if(r.id === deletedRecipeIngredient.recipe.id){
        return({
          ...targetRecipe,
          recipe_ingredients: updatedTargetRecipeIngredients
        })
      } else{
        return(r)
      }
    })

    const updatedUser = {
      ...user,
      recipes: updatedRecipes
    }

    setUser(updatedUser)
  }

  function onSubmitNewList(newShoppingList) {
    const updatedShoppingLists = [
      ...user.shopping_lists, 
      newShoppingList
    ]

    const updatedUser = {
      ...user,
      shopping_lists: updatedShoppingLists
    }

    setUser(updatedUser)
  }

  function onDeleteShoppingList(deletedList) {
    const updatedShoppingLists = user.shopping_lists.filter( s => s.id !== deletedList.id)

    const updatedUser = {
      ...user,
      shopping_lists: updatedShoppingLists
    }

    setUser(updatedUser)
  }

  function onAddNewListIngredient(newIngredient) {
    const targetShoppingList = user.shopping_lists.find(s => s.id === newIngredient.shopping_list.id)

    const updatedTargetShoppingList = {
      ...targetShoppingList,
      ingredients: [
        ...targetShoppingList.ingredients,
        newIngredient]
    }

    const updatedShoppingLists = user.shopping_lists.map( r => {
      if(r.id === newIngredient.shopping_list.id) {
        return (updatedTargetShoppingList)
      } else {
        return(r)
      }
    })

    const updatedUser = {
      ...user, 
      shopping_lists: updatedShoppingLists
    }

    setUser(updatedUser)
  }

  function onDeleteListIngredient(deletedIngredient) {
    const targetShoppingList = user.shopping_lists.find(r => r.id === deletedIngredient.shopping_list.id)
    
    const updatedTargetIngredients = targetShoppingList.ingredients.filter(ingredient => ingredient.id !== deletedIngredient.id)

    const updatedShoppingLists = user.shopping_lists.map(s => {
      if(s.id === deletedIngredient.shopping_list.id){
        return({
          ...targetShoppingList,
          ingredients: updatedTargetIngredients
        })
      } else{
        return(s)
      }
    })

    const updatedUser = {
      ...user,
      shopping_lists: updatedShoppingLists
    }

    setUser(updatedUser)
  }

  

  return (
    <div className="App">
      <header className="heading">
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
