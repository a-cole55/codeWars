# Your task is to create the functionisDivideBy (or is_divide_by) to check 
# if an integer number is divisible by both integers a and b.

# A few cases:


# (-12, 2, -6)  ->  true
# (-12, 2, -5)  ->  false

# (45, 1, 6)    ->  false
# (45, 5, 15)   ->  true

# (4, 1, 4)     ->  true
# (15, -5, 3)   ->  true

def is_divide_by(number, a, b):
    print(number, a, b)
    if number % a == 0 and number % b == 0:
        return True
    else:
        return False
is_divide_by(8, 2, 4) #True)
is_divide_by(12, -3, 4) #True)
is_divide_by(8, 3, 4)  #False)
is_divide_by(48, 2, -5) #False)
is_divide_by(-100, -25, 10) #True)
is_divide_by(10000, 5, -3) #False)
is_divide_by(4, 4, 2) #True)
is_divide_by(5, 2, 3) #False)
is_divide_by(-96, 25, 17) #False)
is_divide_by(33, 1, 33) #True)