#
class ShoppingList < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :other_ingredients
end
