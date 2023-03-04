class FollowingShipsController < ApplicationController
    def create
        following_ship = FollowingShip.create!(user_1_id: session[:user_id], user_2_id: params[:user_2_id])
        render json: following_ship
    end

    def destroy
        following_ship = FollowingShip.find(params[:id])
        following_ship.destroy
        render json: following_ship
    end

    def show_following_recipes
        find_user
        following = find_user.followings
        render json: following
    end

end
