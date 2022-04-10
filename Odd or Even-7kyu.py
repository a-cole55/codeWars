# Task:
# Given a list of integers, determine whether the sum of its elements is odd or even.

# Give your answer as a string matching "odd" or "even".

# If the input array is empty consider it as: [0] (array with a zero).

# Examples:
# Input: [0]
# Output: "even"

# Input: [0, 1, 4]
# Output: "odd"

# Input: [0, -1, -5]
# Output: "even"

import functools
def odd_or_even(arr):
    if len(arr) == 0:
        print("even")
    else:
        sum = functools.reduce(lambda a, b: a+b, arr)
        if sum % 2 == 0:
            return "even"
        else:
            return "odd"


odd_or_even([0, 1, 2]) 
# "odd"
odd_or_even([0, 1, 3])
#  "even"
odd_or_even([1023, 1, 2]) 
# "even"