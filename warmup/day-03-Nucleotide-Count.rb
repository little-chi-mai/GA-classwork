# # Nucleotide Count
#
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).
#
# It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').
#
# Example:
#
# ```
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
# ```
#
# ## Hints
#
# * [Huge list of Ruby String methods](https://ruby-doc.org/core-2.7.2/String.html "Ruby Doc")
#
# * Find the best way to store your values


def count_nucleotides string
  nucleotides = {
    'A' => 0,
    'C' => 0,
    'G' => 0,
    'T' => 0,
    'Error' => 0
  }

  string.split(//).map do |item|
    if nucleotides[item.capitalize]
      nucleotides[item.capitalize] += 1
    else
      nucleotides['Error'] += 1
    end
  end

  nucleotides.map {|k, v| puts "#{k}: #{v}"}
end

count_nucleotides('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGCX')

# count_nucleotides('ACGTACGTACGT')
