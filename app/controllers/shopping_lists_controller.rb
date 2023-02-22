class ShoppingListsController < ApplicationController
    before_action :authorize
    
    def index
        find_user
        shopping_lists = find_user.shopping_lists
        render json: shopping_lists
    end

    def show
        find_user
        shopping_list = find_user.shopping_lists.find(params[:id])
        render json: shopping_list
    end

    def create
        find_user
        shopping_list = find_user.shopping_lists.create!(shopping_list_params)
        render json: shopping_list, status: :created
    end

    def update
        find_user
        shopping_list = find_user.shopping_lists.find(params[:id])
        shopping_list.update(shopping_list_params)
        render json: shopping_list
    end

    def destroy
        find_user
        shopping_list = find_user.shopping_lists.find(params[:id])
        shopping_list.destroy
        render json: shopping_list
    end

    #creating ingredient inside of a shopping_list
    def create_ingredient
        find_user
        shopping_list = find_user.shopping_lists.find(params[:id])
        ingredient = shopping_list.ingredients.create!(ingredient_params)
        render json: ingredient, status: :created
    end


    private

    def shopping_list_params
        params.permit(:name, :date, :user_id)
    end

    def ingredient_params
        params.permit(:name, :category, :shopping_list_id, :quantity, :measurement)
    end

end
