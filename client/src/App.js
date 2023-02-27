import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailedRecipeCard from './components/Cards/DetailedRecipeCard/DetailedRecipeCard';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipePage from './pages/RecipePage/RecipePage';
import SignupPage from './pages/SignupPage/SignupPage';



function App() {

  const [recipes, setRecipes] = useState([])
  
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
          

          {/* <Route exact path='/profile'>
            <UserPage />
          </Route>
          <Route exact path='/profile/recipes'>
            <UserRecipesPage />
          </Route>
          <Route path='/profile/recipes/:recipe_id'>
            <UserDetailedRecipesPage />
          </Route>
          <Route path='/profile/shopping-lists'>
            <UserShoppingListsPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/sign-up'>
            <SignupPage/>
          </Route> */}
        </Switch>
      
        
      </header>
    </div>
  );
}

export default App;
