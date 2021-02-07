# # Simon says 2.0
#
# Implement a game of Simon Says 2.0.
#
# - Game first prints a random number between 1-4.
# - The person has to repeat it.
# - The game repeats the same number and adds another one after it
# - Person then repeats the sequence.
# - This goes on until a player cant repeat the sequence.
# - Game then prints a message, saying how much player scored.
#
# Implement that game however you want.
#
# Here is an example of how it could run:
# ![Simon Says](https://raw.githubusercontent.com/aleksanderbrymora/seir01-homework/master/warmups/5week/3day/simon.gif)

def simon_says
  def rand_num
    num_s = "#{(1..4).to_a.sample}"
    num_s
  end

  puts simon = rand_num
  user_input = gets.chomp.strip

  while user_input == simon

  puts simon = "#{user_input} #{rand_num}"
  sleep 1
  system "clear"
  p user_input = gets.chomp.strip
  p simon
  end

end

simon_says
