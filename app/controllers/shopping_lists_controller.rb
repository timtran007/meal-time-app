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

    private

    def shopping_list_params
        params.permit(:name, :date, :user_id)
    end

end
