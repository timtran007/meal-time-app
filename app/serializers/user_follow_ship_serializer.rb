class UserFollowShipSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :image_url, :following, :followers

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
    object.followers
  end
end
