class Api::SavesController < ApplicationController
    def create
        @save = Save.create(save_params)
        
        if @save.save
            render 'api/saves/show'
        else
            render json: ["Error"], status: 422
        end
    end

    def index 
        if current_user
            @saves = Save.where(user_id: current_user.id)
        else
            @saves = []
        end
        render 'api/saves/index'
    end

    def destroy
        @save = Save.find_by(listing_id: (params[:id]))

        if @save && @save.destroy
            render json: ['unsaved']
        else
            render json: ['error'], status: 401
        end
    end

    private
    def save_params 
        params.require(:save).permit(:user_id, :listing_id)
    end
end
