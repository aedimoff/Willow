class FixSaves < ActiveRecord::Migration[5.2]
  def change
    remove_column :saves, :user_id
  end
end
