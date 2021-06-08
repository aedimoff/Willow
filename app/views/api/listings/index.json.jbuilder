@listings.each do |listing|


    json.set! listing.id do
        json.extract! listing, :id, :address, :zipcode, :price, :description, :city, :state, :status, :property_type, :beds, :baths, :lat, :lng
        json.imageUrls listing.images.map  { |image| image.service_url }
    end
end