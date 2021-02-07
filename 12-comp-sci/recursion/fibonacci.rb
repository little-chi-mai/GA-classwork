# 1 1 2 3 5 8 13

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
## Option bL iterative recursion

fibonacci_recursive(40)
