class User < ApplicationRecord
    has_many :recipes
    has_many :shopping_lists
    has_many :following_ships
    has_many :followings, through: :following_ships, foreign_key: :user_1, source: :user_2
end
