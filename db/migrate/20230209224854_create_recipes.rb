class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image_url
      t.text :instructions
      t.integer :cook_time_in_minutes
      t.integer :prep_time_in_minutes
      t.integer :likes
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
