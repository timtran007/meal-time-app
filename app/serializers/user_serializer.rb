class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :image_url
end
