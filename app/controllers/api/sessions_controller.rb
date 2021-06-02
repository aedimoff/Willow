class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Incorrect email or password"]
        end
    end

    def destroy
        @user = current_user
        if @user 
            log_out
            render json: ["User logged out"]
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end


