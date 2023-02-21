class RecipesController < ApplicationController
    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find(params[:id])
        render json: recipe
    end

    def create
        user = User.find(session[:user_id])
        recipe = user.recipes.create!(recipe_params)
        render json: recipe, status: :created
    end

    def update
        user = User.find(session[:user_id])
        recipe = user.recipes.find(params[:id])
        recipe.update(recipe_params)
        render json: recipe
    end

    def destroy
    end

    private

    def recipe_params
        params.permit(:title, :image_url, :instructions, :cook_time_in_minutes, :prep_time_in_minutes, :likes, :user_id)
    end
end
