class Ingredient < ApplicationRecord
  belongs_to :shopping_list

  validates :name, presence: true
  validates :category, inclusion: { in: %w(meats produce dairy spices baking drinks grains canned_goods), message: "%{value} is not a valid category"}
end
