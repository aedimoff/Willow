class Api::UserListingsController < ApplicationController
    def index 
        @listings = Listing.where(seller_id: current_user.id)
    end
end
