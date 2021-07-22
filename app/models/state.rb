# == Schema Information
#
# Table name: states
#
#  id         :integer          not null, primary key
#  abbr       :string(2)
#  name       :string
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  index_states_on_abbr  (abbr)
#
require 'memoist'

class State < ActiveRecord::Base
  extend Memoist
  has_many :zipcodes
  has_many :counties

  validates :abbr, uniqueness: { case_sensitive: false }, presence: true
  validates :name, uniqueness: { case_sensitive: false }, presence: true

  def cities
    zipcodes.map(&:city).sort.uniq
  end
  memoize :cities
end
