if 3 > 10
  puts "Yep, the number is bigger"
else
  puts "No the number is less than (or equal)"
end

grade = "B"
if grade == "A"
  puts "You are good"
elsif grade == "B"
  puts "You are ok"
else
  puts "Unknown"
end

# Short conditionals with no else

puts "The number is bigger" if 13 > 10

# unless
today_is_wednesday = false
unless today_is_wednesday
  puts "It's not Wednesday"
end

puts "It's not Wednesday" unless today_is_wednesday
