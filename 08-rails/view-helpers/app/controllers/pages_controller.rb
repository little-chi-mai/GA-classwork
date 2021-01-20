class PagesController < ApplicationController
  def home ###Called action
  end

  def numbers
    @amount = 23994.2323
    @large_number = 23456789
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a.shuffle
    @friend_count = 1
    @enemy_count = 11
    @story = "A very long long long long long long long long long long long long time ago and so on"
  end

  def assets
  end

  def url
  end

end
