def find(n):
    # Code here
    x = 0
    total = 0
    while x <= n:
        if x % 3 == 0 or x % 5 == 0:
            total += x
        x += 1
    return total

find(5) 
# 8
find(10)
# 33
