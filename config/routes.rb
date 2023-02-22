Rails.application.routes.draw do
  resources :recipe_ingredients
  #run rails g resource for recipe_ingredients
  resources :following_ships
  resources :ingredients, only: [:index, :show]
  resources :recipes
  resources :shopping_lists

  get '/users', to: 'users#index'

  get '/following-recipes', to: 'following_ships#show_following_recipes'
  get '/user-recipes', to: 'users#user_recipes'
  post '/shopping_lists/:id', to: 'shopping_lists#create_ingredient'
  post '/recipes/:id', to: 'recipes#follow_user'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
