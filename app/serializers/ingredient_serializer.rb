class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :category
  belongs_to :Recipe
  belongs_to :Shopping_List
end
