# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  city        :string           not null
#  description :string
#  price       :integer          not null
#  status      :string
#  zipcode     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seller_id   :integer          not null
#
# Indexes
#
#  index_listings_on_seller_id  (seller_id)
#  index_listings_on_zipcode    (zipcode)
#
class Listing < ApplicationRecord
    validates :address, :zipcode, :city, :price, :description, presence: true
    validates :status, presence: true, inclusion: { in: %w(for_sale pending sold),
    message: "%{value} is not a valid input" }

    belongs_to :seller, optional: true,
        foreign_key: :seller_id,
        class_name: :User

end