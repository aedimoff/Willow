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
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end