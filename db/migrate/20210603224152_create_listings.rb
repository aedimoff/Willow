class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :address, null: false
      t.string :zipcode, null: false, index: true
      t.string :city, null: false
      t.integer :price, null: false
      t.integer :seller_id, null: false, index: true
      t.timestamps
    end
  end
end
