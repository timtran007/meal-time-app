class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :quantity, :measurement
  belongs_to :shopping_list
end
