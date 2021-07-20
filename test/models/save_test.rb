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
require 'test_helper'

class SaveTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
