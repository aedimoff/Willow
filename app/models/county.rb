# == Schema Information
#
# Table name: counties
#
#  id          :integer          not null, primary key
#  abbr        :string
#  county_seat :string
#  name        :string
#  created_at  :datetime
#  updated_at  :datetime
#  state_id    :integer
#
# Indexes
#
#  index_counties_on_name      (name)
#  index_counties_on_state_id  (state_id)
#
require 'memoist'

class County < ActiveRecord::Base
  extend Memoist
  belongs_to :state
  has_many :zipcodes

  validates :name, uniqueness: { scope: :state_id, case_sensitive: false },
                   presence: true

  scope :without_zipcodes, lambda {
    county = County.arel_table
    zipcodes = Zipcode.arel_table
    zipjoin = county
        .join(zipcodes, Arel::Nodes::OuterJoin)
        .on(zipcodes[:county_id].eq(county[:id]))
    joins(zipjoin.join_sources).where(zipcodes[:county_id].eq(nil))
  }
  scope :without_state, lambda {
    where(state_id: nil)
  }

  def cities
    zipcodes.map(&:city).sort.uniq
  end
  memoize :cities
end
