# Infinite loop - control-C

# initialize, conditional, UPDATE

# i = 0   #initialize
# while i < 5   #conditional
#   puts "i is now: #{ i }"   #UPDATE
#   i += 1
# end

# i = 0
# until i == 5 # conditional
#   puts "i is now: #{ i }"
#   i += 1 #UPDATE
# end

## Iterators: Ruby's preference for loops
5.times do |iteration|
  puts "current iteration: #{ iteration }"
end

4.downto(0) do |n|
  puts n
end
