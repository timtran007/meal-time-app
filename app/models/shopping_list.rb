class ShoppingList < ApplicationRecord
  belongs_to :User
  has_many :ingredients
  has_many :recipes, through: :ingredients
end
