
def factorial_iterative(n) #init
  result = 1
  while n > 1 #base case
    result *= n #mutation
    n -= 1 #mutation: moving towards the base case
  end

  p result
end
factorial_iterative(5)

def factorial_recusive(n) #init
  if n <= 1
    p 1 # base case
  else
    p n * factorial_recusive(n-1) # recursion: moving towards the base case
  end

end

factorial_recusive(5)
