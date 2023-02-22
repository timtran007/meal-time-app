class CreateRecipeIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :recipe_ingredients do |t|
      t.string :name
      t.string :category
      t.string :quantity
      t.string :measurement
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
