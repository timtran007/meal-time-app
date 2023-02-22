class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :quantity, :measurement
  belongs_to :recipe
end
