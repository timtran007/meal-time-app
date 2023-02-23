#
class ShoppingList < ApplicationRecord
  belongs_to :user
  has_many :ingredients

  validates :name, presence: true
end
