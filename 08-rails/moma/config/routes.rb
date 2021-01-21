Rails.application.routes.draw do
  resources :artists #plural
  resources :works
end
