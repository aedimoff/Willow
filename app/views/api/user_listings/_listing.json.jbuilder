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
     :seller_id,
     :lat, 
     :lng

 json.imageUrls listing.images.map  { |image| image.service_url }
