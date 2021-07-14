json.save do 
    json.set! @save.id do
        json.extract! @save, :user_id, :listing_id
    end
end
# json.set! save.id do
#     json.extract! 'save', save: save
# end
# json.partial! 'save', save: @save
#     # @save.listing.image

