class RecipeIngredientsController < ApplicationController
    
    def create
        recipe = Recipe.find(params[:recipe_id])
        ingredient = recipe.recipe_ingredients.create!(recipe_ingredient_params)
        render json: ingredient, status: :created
    end

    def update
        recipe = Recipe.find(params[:recipe_id])
        ingredient = recipe.recipe_ingredients.update(recipe_ingredient_params)
        render json: ingredient, status: :created
    end

    def destroy
        ingredient = RecipeIngredient.find(params[:id])
        ingredient.destroy
        render json: ingredient
    end

    private
    def recipe_ingredient_params
        params.permit(:name, :category, :shopping_list_id, :quantity, :measurement)
    end

end
