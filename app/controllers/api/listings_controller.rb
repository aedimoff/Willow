class Api::ListingsController < ApplicationController
    
    def index
        @listings = params["bounds"] ? Listing.in_bounds(params["bounds"]) : Listing.limit(20)
        #@listings = Listing.in_bounds(params["bounds"])
        render 'api/listings/index'
    end

    def saved_listings
        listings_ids = Save.where(user_id: current_user.id).map { |s| s.listing_id }

        @listings = Listing.find(listings_ids)

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
        @listing = Listing.with_attached_images.find_by(id: params[:id])
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

    def destroy 
        @listing = Listing.find_by(id: params[:id])

        if @listing && @listing.destroy
            render 'api/listings/show'
        else
            render json: ["Error deleting listing"], status: 401
        end
    end

    private 
    def listing_params
        params.require(:listing).permit(
            :address, 
            :description, 
            :zipcode, 
            :city, 
            :state,
            :price, 
            :status, 
            :property_type, 
            :beds, 
            :baths,
            :lat,
            :lng,
            :seller_id,
            images: [], 
            )
    end
end
