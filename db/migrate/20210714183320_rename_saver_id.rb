class RenameSaverId < ActiveRecord::Migration[5.2]
  def change
    rename_column :saves, :user_id, :user_id
  end
end
