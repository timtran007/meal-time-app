class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :cook_time_in_minutes, :prep_time_in_minutes
  belongs_to :User
end
