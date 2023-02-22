class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :image_url
  has_many :recipes
end
