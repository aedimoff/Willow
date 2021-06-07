json.extract! listing, 
    :id, 
    :address, 
    :zipcode, 
    :city, 
    :state, 
    :price, 
    :beds, 
    :baths, 
    :property_type, 
    :description, 
    :status, 
    :lat, 
    :lng

json.photoUrls listing.images.map  { |file| url_for(file) }
