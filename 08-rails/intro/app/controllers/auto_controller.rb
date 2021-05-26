class AutoController < ApplicationController
  def color
    # raise 'hell' #binding.pry in the browser
    render :color #optional if erb file is the same name with method
  end

  def engine
    render :engine

  end
end
