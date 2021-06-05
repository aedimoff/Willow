class AddTypeToListing < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :type, :string
  end
end
