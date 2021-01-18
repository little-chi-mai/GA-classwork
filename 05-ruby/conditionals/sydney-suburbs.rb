
# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in? "

residence = gets.chomp

puts case residence
when 'Bondi'
  "something about skin cancer"
when "North Ryde"
  "the best!"
else
  "average"
end
