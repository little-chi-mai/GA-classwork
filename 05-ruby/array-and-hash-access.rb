# require 'pry'

# # Array and Hash access
#
# ### A. Given the following data structure:
#

a = ["Anil", "Erik", "Jonathan"]

# 1. How would you return the string `"Erik"`?
p a[1]
# 1. How would you add your name to the array?
#
p a << 'Mai'

# ### B. Given the following data structure:
#
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# binding.pry
# whereami
#
# 1. How would you return the string `"One"`?

p h[1]

# 1. How would you return the string `"Two"`?

p h[:two]
# 1. How would you return the number `2`?

p h['two']
# 1. How would you add `{3 => "Three"}` to the hash?

p h[3] = "Three"

# 1. How would you add `{:four => 4}` to the hash?
#
p h[:four] = 4
p h

h.merge!({:four => 4})

# ### C. Given the following data structure:
#

is = {true => "It's true!", false => "It's false"}
#
# 1. What is the return value of `is[2 + 2 == 4]`?
###### "It's true!" #####
# p is[2 + 2 == 4]

# 1. What is the return value of `is["Erik" == "Jonathan"]`?
 ##### "It's false"

# 1. What is the return value of `is[9 > 10]`?
##### "It's false"

# 1. What is the return value of `is[0]`?
### nil


# 1. What is the return value of `is["Erik"]`?
### nil
# p is["Erik"]

#
# ### D. Given the following data structure:

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

#
# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
p users["Jonathan"][:twitter]

# 1. How would you add the number `7` to Erik's favorite numbers?
p users["Jonathan"][:favorite_numbers] << 7

# 1. How would you add yourself to the users hash?
p users["Mai"] = {:twitter => "blabla", :favorite_numbers => [4, 12, 13]}
# p users

# 1. How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]

# 1. How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min

# 1. How would you return an array of Anil's favorite numbers that are also even?
p users["Anil"][:favorite_numbers].select { |n| n.even? }
# 1. How would you return an array of the favorite numbers common to all users?
# all_fav_numbers = []
# users.each do |k, v|
#   # puts k, v
#   p all_fav_numbers += v[:favorite_numbers].sort
#   p all_fav_numbers.sort
# end

p users["Anil"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Jonathan"][:favorite_numbers]
### All user

p users.values.map { |info| info[:favorite_numbers] }.inject(&:&)

# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

## VER 1
all_fav_numbers = []
# common_numbers = []
users.each do |k, v|
  # puts k, v
  # common_numbers = v[:favorite_numbers] & all_fav_numbers
  p all_fav_numbers = all_fav_numbers | v[:favorite_numbers]
end
p all_fav_numbers.sort!

## VER 2
p users.values.map { |info| info[:favorite_numbers] }.flatten.sort.uniq

## VER 3
p users.values.map { |info| info[:favorite_numbers] }.inject(&:|).sort
