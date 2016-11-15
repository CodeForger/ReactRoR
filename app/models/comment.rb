class Comment < ApplicationRecord
  belongs_to :restaurant
  has_ancestry
end
