class IngredientsController < ApplicationController
    before_action :authorize

    def create
        shopping_list = ShoppingList.find(params[:shopping_list_id])
        ingredient = shopping_list.ingredients.create!(ingredient_params)
        render json: ingredient
    end

    def destroy
        ingredient = Ingredient.find(params[:id])
        ingredient.destroy
        render json: ingredient
    end

    private

    def ingredient_params
        params.permit(:name, :category, :shopping_list_id, :quantity, :measurement)
    end
end
