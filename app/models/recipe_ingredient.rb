class RecipeIngredient < ApplicationRecord
  belongs_to :recipe

  validates :name, :quantity, presence: true
  validates :category, inclusion: { in: %w(meats produce dairy spices baking drinks grains canned_goods), message: "%{value} is not a valid category"}
  validates :measurement, inclusion: { in: %w(cup/cups ounce/ounces tablespoon/tablespoons teaspoon/teaspoons quart/quarts), message: "%{value} is not a valid measurement"}
end
