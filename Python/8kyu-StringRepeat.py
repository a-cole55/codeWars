# Write a function called repeatStr which repeats the given string string exactly n times.

# repeatStr(6, "I") // "IIIIII"
# repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


def repeat_str(repeat, string):
    return string * repeat

repeat_str(4, 'a') #('aaaa')
repeat_str(3, 'hello ') #('hello hello hello ')
repeat_str(2, 'abc') #('abcabc')