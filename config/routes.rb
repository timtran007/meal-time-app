Rails.application.routes.draw do

  resources :following_ships, only: [:create, :update, :destroy]
  resources :recipes
  resources :shopping_lists
  resources :recipe_ingredients, only: [:create, :update, :destroy]
  resources :ingredients, only: [:create, :update, :destroy]


  get '/users', to: 'users#index'
  get '/user-recipes', to: 'users#user_recipes'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/following-recipes', to: 'following_ships#show_following_recipes'

  post '/follow-user-recipes/', to: 'recipes#follow_user'

  # # feature will be developed at a later time
  # patch 'recipe-likes/:id', to: 'recipes#update_likes'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
