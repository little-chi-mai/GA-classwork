# # Warmup - Raindrops
# Write a program using **Ruby** that will take a number (eg 28 or 1755 or 9, etc) and output the following:
#
# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.
# - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
#
# ## Examples
# - 28 has 7 as a factor. In raindrop-speak, this would be a simple "Plong".
# - 1755 has 3 and 5 as factors. In raindrop-speak, this would be a "PlingPlang".
# - 34 has neither 3, 5 nor 7 as a factor. Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

def raindrops num
  if num % 3 == 0 || num % 5 == 0 || num % 7 == 0

      print "Pling" if num % 3 == 0

      print "Plang" if num % 5 == 0

      print "Plong" if num % 7 == 0

  else
    print num
  end

  # call a string
  # add Pling to that
  # check string.size
end

def menu
  puts "|//\\|" * 10
  puts "RAINDROPS".center(40)
  puts ">><<" * 12
  print "Enter to play, [q] to quit: "
end

menu
user_choice = gets[0].downcase

until user_choice == 'q'
  print "Choose a number: "
  user_num = gets.to_i
  puts raindrops(user_num)

  menu
  user_choice = gets[0].downcase
end

puts "Thanks for playing"
