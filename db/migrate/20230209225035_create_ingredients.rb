class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :category
      t.string :quantity
      t.string :measurement
      t.belongs_to :recipe, null: false
      t.belongs_to :shopping_list

      t.timestamps
    end
  end
end
