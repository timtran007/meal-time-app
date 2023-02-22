class ShoppingListSerializer < ActiveModel::Serializer
  attributes :id, :name, :date
  belongs_to :user
  has_many :ingredients
end
