require 'sinatra'  # starts a server -> listen for requests
require 'sinatra/reloader'  # from sinatra-contrib
require 'pry'
# DSL: Domain Specific Language

get '/' do
  "Hello world -- this is the home page"
end

get '/hello' do
  "Hello world from Sinatra - Mai"
end

get '/goodbye' do
  "Bye"
end


# Dynamic content
get '/lucky_number' do
  "Here is your lucky number: #{ rand 1..40 }"
end

get '/uptime' do
  "The sever uptime is #{`uptime`}"
end

get '/random_brother' do
  %w( Mai Lan Giap Cuong ).sample
end


# Dynamic URLs :placeholder
get '/fanclub/tegan' do
  "Tegan is a proud member of the Mai's fan club."
end

get '/fanclub/douglas' do
  "Douglas is a proud member of the Mai's fan club."
end

get '/fanclub/:member' do
  "#{params[:member].capitalize} is a proud member of the Mai's fan club."
end

# Premium Membership
get "/fanclub/:first/:last" do
  "#{params[:first].capitalize} #{params[:last].upcase} is a premium member of the Mai's fan club."
end

# Platinum Membership

get "/fanclub/:first/:last/:favourite" do
  "#{params[:first].capitalize} #{params[:last].upcase} is a premium member of the #{params[:favourite].capitalize}'s fan club."
end

# Second crappiest calculator of the entire course.

get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is <strong>#{ result }</strong>"
end
