class RenameTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, :type, :property_type
  end
end
