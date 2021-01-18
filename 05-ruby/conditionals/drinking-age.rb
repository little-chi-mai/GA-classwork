# ### 1. Drinking age?
# - Ask the user for their age.
#     - Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# - If age is less than 18, print an appropriate message.
# - If the age is equal to or over 18, print a different message.

print "What is your age? "
user_age = gets.to_i #no need to .chomp

case user_age
when 0..17
  puts "Just wait until you are 18 to drink!"
else
  puts "You're good, just drink!"
end
