class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :instructions
      t.integer :cook_time_in_minutes
      t.integer :prep_time_in_minutes
      t.belongs_to :User, null: false, foreign_key: true

      t.timestamps
    end
  end
end
