#full CRUD
class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :shopping_lists, through: :ingredients
end
