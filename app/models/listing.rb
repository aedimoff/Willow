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

    has_many_attached :photos

    # def image_urls
    #     images.map do |image|
    #         image.service_url
    #     end
    # end

end
