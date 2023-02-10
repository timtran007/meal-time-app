class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :category
      t.belongs_to :Recipe, null: false, foreign_key: true
      t.belongs_to :Shopping_List, null: false, foreign_key: true

      t.timestamps
    end
  end
end
