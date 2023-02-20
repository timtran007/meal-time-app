class ShoppingListSerializer < ActiveModel::Serializer
  attributes :id, :name, :date
  belongs_to :User
end
