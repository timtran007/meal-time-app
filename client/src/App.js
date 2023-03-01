import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailedRecipeCard from './components/Cards/DetailedRecipeCard/DetailedRecipeCard';
import UserDetailedRecipeCard from './components/Cards/UserDetailedRecipeCard/UserDetailedRecipeCard';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipePage from './pages/RecipePage/RecipePage';
import SignupPage from './pages/SignupPage/SignupPage';
import UserPage from './pages/UserPage/UserPage';
import UserRecipesPage from './pages/UserRecipesPage/UserRecipesPage';



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


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Meal Time</h1>
        
        <Switch>
          <Route exact path='/'>
            <RecipePage recipes={recipes}/>
          </Route>
          <Route path='/recipes/:recipe_id'>
            <DetailedRecipeCard recipes={recipes}/>
          </Route>
          <Route exact path='/profile'>
            {user ? <UserPage user={user} followers={user.followers} following={user.following}/> : "loading"}
          </Route>
          <Route exact path='/profile/recipes'>
            {user ? <UserRecipesPage userRecipes={user.recipes}/> : "loading"}
          </Route>
          <Route path='/profile/recipes/:recipe_id'>
            {user ? <UserDetailedRecipeCard userRecipes={user.recipes}/>: "loading"}
          </Route>
          {/* <Route path='/profile/shopping-lists'>
            <UserShoppingListsPage />
          </Route> */}

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
