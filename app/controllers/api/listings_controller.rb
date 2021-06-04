class Api::ListingsController < ApplicationController
    
    def index 
        @listings = Listing.all
        render 'api/listings/index'
    end

    def create
        @listing = Listing.new(listing_params)

        if @listing.save!
            render 'api/listings/show'
        else
            render json: ["Invalid user input"], status: 401
        end
    end

    def show
        @listing = Listing.find_by(id: params[:id])
        render 'api/listings/show'
    end

    def update 
        @listing = Listing.find_by(id: params[:id])
        
        if @listing && @listing.update(listing_params)
            render 'api/listings/show'
        else
            render json: ["Invalid user input"], status: 401
        end
    end

    private 
    def listing_params
        params.require(:listing).permit(:address, :description, :zipcode, :city, :price, :status, :images)
    end
end
