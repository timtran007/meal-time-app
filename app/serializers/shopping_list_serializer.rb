class ShoppingListSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :user
  has_many :ingredients
end
