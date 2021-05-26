# Convention over Configuration

require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do #'root' or home page
  erb :home

end

get '/result' do 
  @x = params[:x].to_f # @-instance variable - everyone access the site has their own copies
  @y = params[:y].to_f

  @result = case params[:operator]
  when '+' then @x + @y
  when '*' then @x * @y
  when '/' then @x / @y
  end

  erb :result
end
