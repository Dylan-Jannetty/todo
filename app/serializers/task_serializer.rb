class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :completed, :order
end
