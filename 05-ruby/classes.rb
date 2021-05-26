# A class is kind of like a hash -- it has key/value pairs
# BUT: you have to predefine the keys
# A class is strict hash - you have to predefine the shape
# Unlike hashes, a object can have methods

# Low ceremony language

require 'pry'

class Family
  # name, instrument, vice

  # setter
  def name=(n)
    @name = n
  end

  # getter
  def name
    @name
  end

  # setter
  def instrument=(i)
    @instrument = i
  end

  # getter
  def instrument
    @instrument
  end

end

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
  attr_accessor :name, :instrument, :vice # don't have to write getter and setter separately, but it's basic version

  def initialize(n='', i='', v='')
    @name = n
    @instrument = i
    @vice = v
  end

  def play()
    "My name is #{@name} and I play #{@instrument}"
  end
end

groucho = MarxBrother.new
groucho.name = "Groucho Marx"
groucho.instrument = "guitar"
groucho.vice = "cigars"


class Stooge < Actor
  def terrible?
    true
  end
end

binding.pry
