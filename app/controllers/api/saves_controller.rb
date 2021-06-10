class Api::SavesController < ApplicationController
    def create
        @save = Save.new(listing_id: params: [:save][:listing_id])
        @save.user_id = current_user.id

        if @save.save!
            render 'api/saves/show'
        else
            render json: ["Error"], status: 401
        end
    end

    def index 
        if current_user
            @saves = Save.all.where(user_id: current_user.id)
        else
            @saves = {}
        end
        render 'api/saves/index'
    end

    def destroy
        @save = Save.find_by(id: params[:id])

        if @save && @save.destroy
            render json: ['unsaved']
        else
            render json: ['error'], status: 401
        end
    end
end
