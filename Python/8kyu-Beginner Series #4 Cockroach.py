# The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

# For example:

# 1.08 --> 30
# Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.



def cockroach_speed(s):
    # Good Luck!
    import math
    return math.floor(((s * 100000)/ 60) /60)

cockroach_speed(1.08) 
#{30)
cockroach_speed(1.09)
#(30)
cockroach_speed(0)
#(0)