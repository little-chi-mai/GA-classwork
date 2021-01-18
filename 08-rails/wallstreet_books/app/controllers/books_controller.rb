class BooksController < ApplicationController
  def form
    render :form
  end

  def result
    @book_name = params[:book_name]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_name }"
    @info = HTTParty.get url
    # raise 'Heyyy'
    @cover = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

    @author = @info['items'].first['volumeInfo']['authors'].join(', ')
    @title = @info['items'].first['volumeInfo']['title']
    @description = @info['items'].first['volumeInfo']['description']

    render :result
  end
end
