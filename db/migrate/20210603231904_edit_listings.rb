class EditListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :status, :string
  end
end
