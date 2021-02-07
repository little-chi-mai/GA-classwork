require 'httparty' #get content from a url
response = HTTParty.get 'http://numbersapi.com/random/trivia' #turn browers content into a string  ### sync
puts response
