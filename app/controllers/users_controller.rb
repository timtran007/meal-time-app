class UsersController < ApplicationController

    before_action :authorize

    skip_before_action :authorize, only: [:create]
    
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
        render json: user
    end

    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :image_url)
    end
end
