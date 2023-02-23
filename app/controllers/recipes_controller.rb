class RecipesController < ApplicationController
    before_action :authorize

    skip_before_action :authorize, only: [:index, :show]

    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find(params[:id])
        render json: recipe
    end

    def create
        find_user
        recipe = find_user.recipes.create!(recipe_params)
        render json: recipe, status: :created
    end

    def update
        find_user
        recipe = find_user.recipes.find(params[:id])
        recipe.update(recipe_params)
        render json: recipe
    end

    def destroy
        find_user
        recipe = find_user.recipes.find(params[:id])
        recipe.destroy
        render json: recipe
    end

    #add follow_user action /recipe/:id, to "recipes#follow_user"
    def follow_user
        find_user
        recipe = Recipe.find(params[:recipe_id])
        user = recipe.user
        followship = find_user.following_ships.create!(user_1_id: session[:user_id], user_2_id: user.id)
        render json: followship
    end

    private

    def recipe_params
        params.permit(:title, :image_url, :instructions, :cook_time_in_minutes, :prep_time_in_minutes, :likes, :user_id)
    end
end
