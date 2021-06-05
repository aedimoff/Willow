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
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
