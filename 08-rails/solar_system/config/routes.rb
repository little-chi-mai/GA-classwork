Rails.application.routes.draw do
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new', :as => 'new_planet'
  get '/planets/:id' => 'planets#show'
  post '/planets' => 'planets#create'
  get '/planets/:id/edit' => 'planets#edit', :as => 'edit_planet'
  post '/planets/:id' => 'planets#update'
  delete '/planets/:id' => 'planets#destroy'
end
