class RemoveDateFromShoppingList < ActiveRecord::Migration[7.0]
  def change
    remove_column :shopping_lists, :date, :datetime
  end
end
