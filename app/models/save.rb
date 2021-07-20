# == Schema Information
#
# Table name: saves
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  listing_id :integer
#  user_id    :integer
#
# Indexes
#
#  index_saves_on_listing_id  (listing_id)
#
class Save < ApplicationRecord
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
        
    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end
