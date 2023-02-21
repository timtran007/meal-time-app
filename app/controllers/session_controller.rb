class SessionController < ApplicationController
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
