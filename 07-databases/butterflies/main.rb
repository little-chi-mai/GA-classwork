require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


# at least one route
get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  # db = SQLite3::Database.new 'database.sqlite3'
  # db.results_as_hash = true
  # @butterflies = db.execute 'SELECT * FROM butterflies'
  @butterflies = query_db 'SELECT * FROM butterflies'   # fetch the butterflies
  erb :butterflies_index
end

# NEW PAGE
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE
post '/butterflies' do
  # params.to_json #Return a string
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:image]}')"
  redirect to('/butterflies') # GET
end

# SHOW
get '/butterflies/:id' do
  # connect to the db
  # get the butterfly
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{params[:id]}"
  @butterfly = @butterfly.first
  # close the db
  erb :butterflies_show
end

# EDIT
get '/butterflies/:id/edit' do
  #get the butterfly from the db
  #extract the butterfly from the array
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{params[:id]}"
  @butterfly = @butterfly.first
  erb :butterflies_edit
end

# UPDATE
post '/butterflies/:id' do
  query_db "UPDATE butterflies SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/butterflies/#{params[:id]}")  ## GET
end

#DESTROY
get '/butterflies/:id/delete' do
  #delete the butterfly
  query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
  redirect to('/butterflies')
  #redirect
end

def query_db(sql_statement)
  puts sql_statement  #optional but it's good for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
