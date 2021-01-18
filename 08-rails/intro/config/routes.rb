Rails.application.routes.draw do
  root :to => 'pages#hello' # equivalent to get '/' => ...
  get '/hello' => 'pages#hello'
  get '/goodbye' => 'pages#goodbye'
  get '/funny' => 'pages#funny'

  get '/auto/:color' => 'auto#color' #params#color
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'

end


# get '/hello' do #### SPLIT into pages_controller.rb
#   erb :hello
# end
