class UsersController < ApplicationController

    before_action :authorize

    skip_before_action :authorize, only: [:create, :index]

    def index
        users = User.all
        render json: users
    end
    
    def create
        user = User.create!(user_params)
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user, serializer: UserFollowShipSerializer
    end

    #getting user's recipes
    def user_recipes
        find_user
        recipes = find_user.recipes
        render json: recipes
    end


    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :image_url)
    end
end
