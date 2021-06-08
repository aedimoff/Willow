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

 json.imageUrls listing.images.map  { |image| image.service_url }
