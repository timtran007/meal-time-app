class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :instructions, :cook_time_in_minutes, :prep_time_in_minutes, :likes
  belongs_to :user
  has_many :recipe_ingredients
end
