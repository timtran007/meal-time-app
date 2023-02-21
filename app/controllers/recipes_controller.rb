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

    private

    def recipe_params
        params.permit(:title, :image_url, :instructions, :cook_time_in_minutes, :prep_time_in_minutes, :likes, :user_id)
    end
end
