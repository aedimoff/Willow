class AddSellerIdColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :seller_id, :integer
  end
end
