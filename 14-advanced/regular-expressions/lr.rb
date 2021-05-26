# lr.rb - A Ruby line reader (equivalent to `cat`)
# Usage: ruby lr.rb somefile.txt

# require 'pry'
# binding.pry

#Magic variable that contains all the lines of all the filenames mentioned in ARGV - Argument Variable // ARGF - content of the file

# [2] pry(main)> ARGF.each.to_a
# => ["Fred\n", "Fred flintstone\n", "frederick\n", "Alfred\n", "Mr. Slate\n", "FRED\n", "fred\n", "Mississippi\n", "Bamm-Bamm\n", "llama\n", "wilma and fred\n"]

ARGF.each do |line|
  puts line if line =~ /[aeiou]/
end

# 1. [10] Make a program that prints each line of its input that mentions fred. (It shouldn’t do anything for other lines of input.) Does it match if your input string is Fred, frederick, or Alfred? Make a small text file with a few lines mentioning "fred flintstone" and his friends, then use that file as input to this program and the ones later in this section.

# ARGF.each do |line|
#   puts line if line =~ /fred/
# end

#
# 2. [6] Modify the previous program to allow Fred to match as well. Does it match now if your input string is Fred, frederick, or Alfred? (Add lines with these names to the text file.)

# ARGF.each do |line|
#   puts line if line =~ /[Ff]red/
# end

#
# 3. [6] Make a program that prints each line of its input that contains a period (.), ignoring other lines of input. Try it on the small text file from the previous exercise: does it notice Mr. Slate?

# ARGF.each do |line|
#   puts line if line =~ /\./
# end
#
# 4. [8] Make a program that prints each line that has a word that is capitalized but not ALL capitalized. Does it match Fred but neither fred nor FRED?

# ARGF.each do |line|
#   puts line if line =~ /[A-Z][a-z]/
# end

#
# 5. [8] Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.

# ARGF.each do |line|
#   puts line if line =~ /(.)\1/ # Capturing: any letter followed by itself
# end

#
# 6. [8] Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  puts line if line =~ /wilma/ && line =~ /fred/ # Capturing: any letter followed by itself
end

