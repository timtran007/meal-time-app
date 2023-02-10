class Ingredient < ApplicationRecord
  belongs_to :Recipe
  belongs_to :Shopping_List
end
