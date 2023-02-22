Rails.application.routes.draw do
  resources :following_ships
  resources :ingredients
  resources :recipes
  resources :shopping_lists

  get '/following-recipes', to: 'following_ships#show_following_recipes'
  get '/user-recipe', to: 'users#user_recipe'
  get '/users', to: 'users#index'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
