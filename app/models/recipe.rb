#full CRUD
class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy

  validates :title, :likes, presence: true
  validates :instructions, length: {minimum: 50}
  validates :cook_time_in_minutes, :prep_time_in_minutes, numericality: { only_integer: true }
end
