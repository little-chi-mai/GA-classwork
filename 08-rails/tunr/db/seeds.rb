User.destroy_all
u1 = User.create :email => 'jonesy@ga.co', :password => 'chicken'
u2 = User.create :email => 'craigsy@ga.co', :password => 'chicken', :admin => true
puts "#{User.count} users created."

Song.destroy_all
s1 = Song.create :title => 'Toxic'
s2 = Song.create :title => "I don't care"
s3 = Song.create :title => 'Dream'
s4 = Song.create :title => 'Happier'
s5 = Song.create :title => 'Look what you made me do'
puts "#{Song.count} songs created."

Album.destroy_all
l1 = Album.create :title => 'In The zone'
l2 = Album.create :title => 'The Last Romance'
l3 = Album.create :title => 'Engine Takes To The Water'
puts "#{Album.count} songs created"

Artist.destroy_all
a1 = Artist.create :name => 'Britney Spears'
a2 = Artist.create :name => 'Devo'
a3 = Artist.create :name => 'Arab Strap'
puts "#{Artist.count} artists created."

Genre.destroy_all
g1 = Genre.create :name => 'Folk'
g2 = Genre.create :name => 'Pop'
g3 = Genre.create :name => 'New Wave'
puts "#{Genre.count} genres."

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Makeout Music'
m2 = Mixtape.create :title => 'Code Jams'
m3 = Mixtape.create :title => 'Driving songs'
puts "#{Mixtape.count} mixtapes."

# Associations
puts "Albums and songs."
l1.songs << s1
l2.songs << s2
l3.songs << s3

puts "Artists and songs."
a1.songs << s1
a2.songs << s2
a3.songs << s3

puts "Genres and songs."
s1.genres << g1 << g2
s2.genres << g3 << g2
s3.genres << g1 << g3

puts "Mixtapes and songs."
`m1.songs << s1 << s2 << s3 << s4`
m2.songs << s2 << s3 << s4 << s5
m3.songs << s1 << s2 << s3 << s4

puts "Mixtapes and users."
u1.mixtapes << m1 << m2
u2.mixtapes << m1 << m3
