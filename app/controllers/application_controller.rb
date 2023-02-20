class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    private

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: 422
    end
end
