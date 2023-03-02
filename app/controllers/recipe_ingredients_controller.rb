class RecipeIngredientsController < ApplicationController

    def show
        recipe = Recipe.find(params[:recipe_id])
        ingredient = recipe.recipe_ingredients.find(params[:id])
        render json: ingredient
    end
    
    def create
        recipe = Recipe.find(params[:recipe_id])
        ingredient = recipe.recipe_ingredients.create!(recipe_ingredient_params)
        render json: ingredient, status: :created
    end

    def update
        recipe = Recipe.find(params[:recipe_id])
        ingredient = recipe.recipe_ingredients.find(params[:id])
        ingredient.update(recipe_ingredient_params)
        render json: ingredient
    end

    def destroy
        ingredient = RecipeIngredient.find(params[:id])
        ingredient.destroy
        render json: ingredient
    end

    private
    def recipe_ingredient_params
        params.permit(:name, :category, :shopping_list_id, :quantity, :measurement, :recipe_id)
    end

end
