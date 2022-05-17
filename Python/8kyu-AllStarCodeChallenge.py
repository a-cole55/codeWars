# Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

# If no occurrences can be found, a count of 0 should be returned.

# ("Hello", "o")  ==>  1
# ("Hello", "l")  ==>  2
# ("", "z")       ==>  0
# Notes:

# The first argument can be an empty string
# The second string argument will always be of length 1

def str_count(strng, letter):
    # Your code here ;)
    count = 0
    for char in strng:
        if letter == char:
            count += 1

            
    return count
# or
# def strCount(string, letter):
#     return string.count(letter)
str_count('hello', 'l') #(2)
str_count('hello', 'e') #1
str_count('codewars', 'c') #1
str_count('ggggg', 'g') #5
str_count('hello world', 'o') #2
str_count('', 'z') #0)
