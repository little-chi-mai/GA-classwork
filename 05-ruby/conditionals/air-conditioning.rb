# ### 2. Air Conditioning
# - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
#     - If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now!  It's hot!"
#     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance...  It's cool..."

print "What is the current temperature? "
current_temp = gets.to_f

print "Is the air con functional (y/n): "
is_ac_functional = gets[0].downcase # TODO: better

print "What temperature that you like? "
desired_temp = gets.to_f



case is_ac_functional
when "y"
  if current_temp > desired_temp
    puts "Turn on the A/C please"
  end
when "n"
  if current_temp > desired_temp
    puts "Fix the A/C now! It's hot!"
  else
    puts "Fix the A/C whenever you have the chance...  It's cool..."
  end
end
