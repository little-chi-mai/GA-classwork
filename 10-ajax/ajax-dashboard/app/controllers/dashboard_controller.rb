class DashboardController < ApplicationController
  # def brother
  #   brother = %w( Groucho Harpo Chico).sample
  #   render :plain => brother
  # end

  # def time
  #   render :plain => Time.now # plain text
  # end

  # def uptime
  #   render :plain => `uptime`
  # end

  def info
    brother = %w( Groucho Harpo Chico Zeppo Gummo).sample
    time = Time.now.to_s
    uptime = `uptime`

    render :json => {
      :brother => brother,
      :time => time,
      :uptime => uptime
    }
  end
end
