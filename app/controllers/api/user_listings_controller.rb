class Api::UserListingsController < ApplicationController
    def index 
        @listings = Listing.where(seller_id: current_user.id)
        render 'api/user_listings/index'
    end
end
