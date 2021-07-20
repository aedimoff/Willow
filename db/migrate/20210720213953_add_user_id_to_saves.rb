class AddUserIdToSaves < ActiveRecord::Migration[5.2]
  def change
    add_column :saves, :user_id, :integer
  end
end
