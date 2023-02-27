class UserFollowShipSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :image_url, :following, :followers, :shopping_lists

  def following
    object.followings.map do |following| {
      id: following.id,
      name: following.name,
      email: following.email,
      image_url: following.image_url,
      recipes: following.recipes
      }
    end
  end

  def followers
    object.followers.map do |follower| {
      id: follower.id,
      name: follower.name,
      email: follower.email,
      image_url: follower.image_url,
    }
    end
  end

  def shopping_lists
    object.shopping_lists
  end

  has_many :recipes
 
end
