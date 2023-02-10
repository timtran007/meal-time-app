class Recipe < ApplicationRecord
  belongs_to :User
  has_many :ingredients
  has_many :shopping_lists, through: :ingredients
end
