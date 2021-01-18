# A class is kind of like a hash -- it has key/value pairs
# BUT: you have to predefine the keys
# A class is strict hash - you have to predefine the shape
# Unlike hashes, a class can have methods

# Low ceremony language

require 'pry'

# Template

class Actor
  def award_speech
    "Thank you for the award"
  end

  def deny_allegations
    "I denied"
  end
end

class MarxBrother < Actor #Inherit
  attr_accessor :name, :instrument, :vice

  def initialize(n='', i='', v='')
    @name = n
    @instrument = i
    @vice = v
  end

  def play()
    "My name is #{@name} and I play #{@instrument}"
  end
end


class Stooge < Actor
  def terrible?
    true
  end
end

binding.pry
