class SessionController < ApplicationController
    
    before_action :authorize
    skip_before_action :authorize, only: [:create]

    def create
        user = User.find_by(sessions[:email])
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: ["Invalid email or password"]}, status: :unauthroized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
