class FollowingShipsController < ApplicationController

    def index
        following_ships = FollowingShip.all
        render json: following_ships
    end
    def create
        following = FollowingShip.create!(user_1_id: session[:user_id], user_2_id: params[:user_2_id])
        render json: following
    end

    def show_following_recipes
        find_user
        following = find_user.followings
        render json: following
    end


end
