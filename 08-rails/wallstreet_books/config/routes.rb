Rails.application.routes.draw do
  root :to => 'pages#hello'
  get '/hello' => 'pages#hello'

  get '/stocks' => 'stocks#form'
  get '/stocks/result' => 'stocks#result'

  get '/books' => 'books#form'
  get '/books/result' => 'books#result'
end
