class UsersController < ApplicationController
    
    def create
        user = User.create!(user_params)
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}
        end
    end
    
    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :image_url)
    end
end
