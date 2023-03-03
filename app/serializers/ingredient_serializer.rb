class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :category
  belongs_to :shopping_list
end
