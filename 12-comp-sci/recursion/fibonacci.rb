# 1 1 2 3 5 8 13
require 'pry'

def fibonacci_iterative(n)
  a = 1
  b = 1

  while n > 2 # base case = fib(1) = 1, fib(2) = 2
    # temp = a
    # a = b # mutation
    # b = b + temp # mutation
    # parallel assignment (atomic)
    a, b = b, a + b
    n -= 1
  end
  p b
end

fibonacci_iterative(10)

def fibonacci_recursive(n)
  if n == 1 || n == 2
    1
  else
    p fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
  end
end

## Bonus homework
## Make this faster but still recursive
## Option a: memoisation

def fib_memo(n)
  @fib = @fib || {} # @fib ||= {}

  if @fib[n]
    @fib[n] #return the value we saved earlier.
  elsif n ==1 || n == 2
    1
  else
    @fib[n] = fib_memo(n - 1) + fib_memo(n - 2)
     #memoisation
  end
end

## Option b: iterative recursion

def fib(n, a = 1, b = 1)
  if n == 1 || n == 2
    b
  else
    fib n - 1, b, a+b
  end
end

binding.pry

# fibonacci_recursive(40)
