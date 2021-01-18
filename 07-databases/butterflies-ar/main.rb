require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do this for you automatically:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Models (when a class connected to a database)
class Butterfly < ActiveRecord::Base ### Singular name of the table
  belongs_to :plant, :optional => true #there are butterflies don't belong to any plant
end

class Plant < ActiveRecord::Base
  has_many :butterflies
end

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# at least one route
get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

# NEW PAGE
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to("/butterflies/#{butterfly.id}") # GET show
end

# SHOW
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

# EDIT
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# UPDATE
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to("/butterflies/#{params[:id]}")  ## GET
end

#DESTROY
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies')
  #redirect
end


##### PLANTS ##############

# INDEX
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

# NEW PAGE

get '/plants/new' do
  erb :plants_new
end


# CREATE
post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{plant.id}") # GET show
end

# SHOW
get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :plants_show
end

# EDIT
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

# UPDATE
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{params[:id]}")  ## GET
end

#DESTROY
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to('/plants')
  #redirect
end

# # Don't do this in real life
get '/pry' do
  binding.pry
  "Thank you for using pry! Don't tell anyone about this URL"
end
