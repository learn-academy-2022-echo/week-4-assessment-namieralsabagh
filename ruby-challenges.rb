# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# PseudoCode
# Create an array called nums
# Create a method called even_or_odd
# Use array.select to select the number
# Use if statment if value.even? 
# Use p and string interpolation to return even statement
#  Use else statement for odd number catchall
# Use p and string interpolation to return odd statement

nums = [7, 42, 221]
def even_or_odd array
  array.select do |value|
    if value.even?
        p  "#{value} is even"
    else 
        p  "#{value} is odd"
    end
   end
end
 even_or_odd nums 

 num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# this returned;
# "7 is odd"
# "42 is even"
# "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# PseudoCode
# Create a string called words
# Create a method called delete_vowel
# Use .value.delete!('AEIOUaeiou') on string to remove vowels


words = 'Rubber Soul', 'Sgt Pepper', 'Abbey Road' 
def delete_vowel string 
string.select do |value|
    value.delete!('AEIOUaeiou')
end
end 
p delete_vowel words

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'


#  This returned;
# ["Rbbr Sl", "Sgt Pppr", "bby Rd"]

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# PseudoCode
# Create a method called palindrome_tester
# Use .downcase on string so capital letter doesn't make fail 
# Use .reverse on string to flip the word to check if palindrome

def palindrome_tester string
    if string.downcase == string.downcase.reverse
        p "#{string}, is palindrome"
    else
        p "#{string}, is not palindrome"
    end
end

palindrome_tester 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester  'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester  'Rotator'
# Expected output: 'Rotator is a palindrome'

# This returned;
# "Racecar, is palindrome"
# "LEARN, is not palindrome"
# "Rotator, is palindrome"