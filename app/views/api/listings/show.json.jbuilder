json.listings do 
    json.set! @listing.id do
        json.extract! @listing, :id, :address, :zipcode, :city, :state, :price, :beds, :baths, :property_type, :description, :status, :image_urls
    end
end

