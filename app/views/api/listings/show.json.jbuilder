json.listings do 
    json.set! @listing.id do
        json.extract! @listing, :id, :address, :zipcode, :price, :description, :status, :image_urls
    end
end