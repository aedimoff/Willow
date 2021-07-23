# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  address       :string           not null
#  baths         :integer
#  beds          :integer
#  city          :string           not null
#  description   :string
#  lat           :float
#  lng           :float
#  price         :integer          not null
#  property_type :string
#  state         :string
#  status        :string
#  zipcode       :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  seller_id     :integer
#
# Indexes
#
#  index_listings_on_zipcode  (zipcode)
#
include Rails.application.routes.url_helpers

class Listing < ApplicationRecord
    validates :address, :zipcode, :city, :state, :price, :description, presence: true
    validates :status, presence: true, inclusion: { in: %w(for_sale pending sold),
    message: "%{value} is not a valid input" }
    validates :property_type, presence: true, inclusion: { in: %w(house apartment lot)}

    belongs_to :seller, optional: true,
        foreign_key: :seller_id,
        class_name: :User

    has_many_attached :images

    has_many :saves,
        foreign_key: :listing_id,
        class_name: :Save

    has_many :savers,
        through: :saves,
        source: :user 


    def self.saved_by(bounds)
        self.where("listings.saves.user_id", bounds["saves"])
    end

    def self.in_bounds(bounds) 
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end
end
