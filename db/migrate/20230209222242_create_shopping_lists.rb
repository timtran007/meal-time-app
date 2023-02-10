class CreateShoppingLists < ActiveRecord::Migration[7.0]
  def change
    create_table :shopping_lists do |t|
      t.string :name
      t.datetime :date
      t.belongs_to :User, null: false, foreign_key: true

      t.timestamps
    end
  end
end
