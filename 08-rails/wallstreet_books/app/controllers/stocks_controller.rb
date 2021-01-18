class StocksController < ApplicationController
  def form
    render :form
  end

  def result
    # StockQuote::Stock.new(:api_key)
    render :result
  end
end
