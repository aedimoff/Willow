# == Schema Information
#
# Table name: saves
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  listing_id :integer
#  saver_id   :integer
#
# Indexes
#
#  index_saves_on_listing_id  (listing_id)
#  index_saves_on_saver_id    (saver_id)
#
class Save < ApplicationRecord
    belongs_to :user,
        foreign_key: :saver_id,
        class_name: :User
        
    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end
