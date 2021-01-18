# # Title: Guess The Number
#
# ### Activity:
# - You are to generate a basic "guess my number" game.  The computer will pick a random number between 0 and 10.  The user will guess the number until they guess correctly.
#
# ### Specification:
# - The user should be asked to guess a number
# - If the user's guess is correct, the user should see a congratulatory message
# - If the user's guess is not correct, the user should be asked to guess the number again.
#
# ### Extensions:
# - Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# - Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

print "What is the max number to guess: "
MAX = gets.to_i

debug_mode = true
RANDOM_NUMBER = rand 0..MAX

puts "The secret number is #{RANDOM_NUMBER}" if debug_mode

print "What number is your guess: "
user_guess = gets.to_i

until user_guess == RANDOM_NUMBER
  if user_guess > RANDOM_NUMBER
    print "Wrong, guess lower: "
  else
    print "Wrong, guess higher: "
  end
    user_guess = gets.to_i
end

puts "Congrats, #{RANDOM_NUMBER} is the secret number"
