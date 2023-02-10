class FollowingShipSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user_1
  has_one :user_2
end
