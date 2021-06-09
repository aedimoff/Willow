class Api::SavesController < ApplicationController
    def create
        @save = Save.new(:listing_id: params: [:save][:listing_id])
        @save.user_id = current_user.id

        if @save.save!
            render 'api/saves/show'
        else
            render json: ["Error"], status: 401
        end
    end

    def index 
        

    end

    def destroy

    end
end
