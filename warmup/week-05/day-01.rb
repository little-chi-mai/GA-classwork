# ## Point Mutations
#
# A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.
#
# The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.
#
# By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.
#
# This is called the 'Hamming distance'
#
# ```
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# ```
#
# The Hamming distance between these two DNA strands is 7.
#
# Write a program that can calculate the Hamming difference between two DNA strands.
#
# ### Source
#
# The Calculating Point Mutations problem at [Rosalind](http://rosalind.info/problems/hamm/)

def point_mutation(s1, s2)
  hamming_distance = 0
  s1.each_char.with_index do |char, i|
    hamming_distance += 1 unless s1[i] == s2[i]
  end
  p hamming_distance
end

point_mutation('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT')
