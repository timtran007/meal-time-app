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
    end

    def update
    end

    def destroy
    end
end
