# # Robot Factory 🤖
#
# You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up.
#
# The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.
#
# Names typically take the format of things like "BX777" or "SD234".
#
# For instance:
# ```rb
# robot1 = Robot.new
#
# puts robot1.name
# => "BX777"
#
# robot2 = Robot.new
#
# puts robot2.name
# => "SD234"
#
# puts robot2.name
# => "SD234"
# ```
#
# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.
#
# if I say:
# ```rb
# robot3 = Robot.new
#
# puts robot3.name
# => "RF629"
#
# robot3.reset
#
# puts robot3.name
# => "ZC532"
# ``c

class Robot
  def initialize
    @name = rand_name
    @counter = 0
    @created_at = Time.now.to_i
    @reset_at = Time.now.to_i
  end

  def rand_letter
    rand_letter = ('AA'..'ZZ').to_a.sample
  end

  def rand_number
    rand_number = ('000'..'999').to_a.sample
  end

  def rand_name
    name = rand_letter.concat(rand_number)
  end

  def get_name
    @counter += 1
    @name
  end

  def reset
    puts "#{Time.now.to_i - @reset_at} seconds since last reset, and #{Time.now.to_i - @created_at} seconds since creation."
  end

end



# rand_name

robot1 = Robot.new

p robot1.get_name
p robot1.reset

# ## Extensions 🧯
#
# ### Counters 🔢
# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away.
#
# For every action our robot takes, we should keep track of it.
#
# ```rb
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
#
# robot3.reset
# puts robot3.name
# puts robot3.name
#
# puts robot3.instruction_count
# => 5
# ```
#
# ### Robot Time ⌚️
# Number of instructions is important, but so is the total age of the robot.
# ```rb
# robot3 = Robot.new
# puts robot3.timers
# => "21 seconds since last boot, 21 seconds since creation"
#
# robot3.reset
# puts robot3.timers
# => "8 seconds since last boot, 29 seconds since creation"
# ```
#
# ## Hints
# [Ruby Classes - www.ruby-lang.org](https://www.ruby-lang.org/en/documentation/faq/8/)
#
# [Ruby Classes - www.rubyguides.com](https://www.rubyguides.com/2019/02/ruby-class/)
