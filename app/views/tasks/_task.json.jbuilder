json.extract! task, :id, :title, :description, :completed, :order, :created_at, :updated_at
json.url task_url(task, format: :json)
