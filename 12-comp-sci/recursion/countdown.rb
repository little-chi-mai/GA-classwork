def countdown_recursive(n=10)
  if n < 0 #base case
    puts "Blast off!"
  else
    puts n
    sleep 1
    countdown_recursive n-1
  end
end

countdown_recursive();
