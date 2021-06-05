class AddStateToListing < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :state, :string
  end
end
