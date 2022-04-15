# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.


def find_short(s):
    # your code here
    array = s.split()
    l = len(array[0])
    for str in array:
        x = len(str)
        if x < l:
            l = x
    return l

find_short("bitcoin take over the world maybe who knows perhaps") #(3)
find_short("turns out random test cases are easier than writing out basic ones") #(3)
find_short("lets talk about javascript the best language") #(3)
find_short("i want to travel the world writing code one day") #(1)
find_short("Lets all go on holiday somewhere very cold") #(2)   
find_short("Let's travel abroad shall we") #(2)