class Ingredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :shopping_list
end
