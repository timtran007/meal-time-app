class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :category
  has_one :Recipe
  has_one :Shopping_List
end
