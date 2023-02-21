class User < ApplicationRecord
    has_secure_password

    has_many :recipes
    has_many :shopping_lists
    has_many :following_ships, foreign_key: :user_1
    has_many :followings, through: :following_ships, foreign_key: :user_1, source: :user_2

    has_many :follower_ship, foreign_key: :user_2, class_name: "FollowingShip"
    has_many :followers, through: :follower_ship, foreign_key: :user_2, source: :user_1

end
 