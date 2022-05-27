# Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
# The first word within the output should be capitalized only if the original word was capitalized 
# (known as Upper Camel Case, also often referred to as Pascal case).

# Examples
# "the-stealth-warrior" gets converted to "theStealthWarrior"
# "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


def to_camel_case(text):
    #your code here
    import re
    camelCase = []
    if len(text) != 0:
        arr = re.split(', |_|-|!', text)
        for word in arr:
            if word != arr[0]:
                word = word.capitalize()
                camelCase.append(word)
            else:
                camelCase.append(word)
        return ''.join(camelCase)
    else:
        return text

to_camel_case('') #'', "An empty string was provided but not returned")
to_camel_case("the_stealth_warrior") #"theStealthWarrior", "to_camel_case('the_stealth_warrior') did not return correct value")
to_camel_case("The-Stealth-Warrior") #"TheStealthWarrior", "to_camel_case('The-Stealth-Warrior') did not return correct value")
to_camel_case("A-B-C") #"ABC", "to_camel_case('A-B-C') did not return correct value")
