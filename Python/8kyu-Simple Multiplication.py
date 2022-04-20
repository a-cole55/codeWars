# This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

def simple_multiplication(number) :
    # Your code goes here
    if number % 2 == 0:
        number *= 8
    else: 
        number *= 9
    return number

simple_multiplication(2) #(16)
simple_multiplication(1) #(9)
simple_multiplication(8) #(64)
simple_multiplication(4) #(32)
simple_multiplication(5) #(45)

#Simple Solution -- Not Mine
# def simple_multiplication(number) :
#     return number * 8 if number % 2 else number * 9