class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    private

    def render_record_not_found
        render json: {error: ["record not found"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end

    def authorize
        render json: {errors: ['Unauthorized user']}, status: 401 unless session.include? :user_id
    end

    def find_user
        user = User.find(session[:user_id])
    end
end
