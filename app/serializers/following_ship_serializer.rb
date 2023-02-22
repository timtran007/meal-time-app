class FollowingShipSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user_1
  belongs_to :user_2
end
