# Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

def remove_exclamation_marks(s):
    #your code here
    return s.replace("!","")


remove_exclamation_marks("Hello World!") #("Hello World")
remove_exclamation_marks("Hello World!!!") #("Hello World")
remove_exclamation_marks("Hi! Hello!") #("Hi Hello")
remove_exclamation_marks("") #("")
remove_exclamation_marks("Oh, no!!!") #("Oh, no")
