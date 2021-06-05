@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :address, :zipcode, :price, :description, :city, :state, :status, :property_type, :image_urls, :beds, :baths, :lat, :lng
    end
end