require 'sinatra'
require 'sinatra/reloader'

puts "Please run the following commang in another terminal: "
puts "sudo nmap -Pn -sS -oA scan -p 80 -iR 0 -vvv --open"

get '/' do
    # open the log file
    scanlog = File.open 'scan.gnmap'
    # iterate
    @hosts = []

    scanlog.each do |line|
        next if line =~ /^#/ # ^ is the anchor for the start of the line - skip any lines that start with #
        m = line.match /Host: ([0-9.]+)/ # capture the dotted quad IP address
        @hosts << m[1]
    end

    # remove duplocates
    @hosts.uniq!
    # render the view
    erb :home
end