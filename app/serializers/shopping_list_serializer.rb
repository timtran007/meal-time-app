class ShoppingListSerializer < ActiveModel::Serializer
  attributes :id, :name, :date
  has_one :User
end
