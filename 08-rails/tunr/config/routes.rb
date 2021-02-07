Rails.application.routes.draw do
  get 'mixtapes/new'
  root :to => 'pages#home'
  resources :users, :only => [:new, :create, :index]

  resources :mixtapes, :only => [:new, :create]

  get '/login' => 'session#new' #session is singular
  post '/login' => 'session#create' #process the login
  delete '/login' => 'session#destroy'  #log out
end
