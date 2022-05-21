# The following was a question that I received during a technical interview for an entry level 
# software developer position. I thought I'd post it here so that everyone could give it a go:

# You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, 
# one number is missing. Write a function to find and return this number. What are the time and 
# space complexities of your solution?

def missing_no(nums):
    #Your code here
    x = 0
    while x <= len(nums):
        if x not in nums:
            return x
        else:
            x += 1

nums = list(range(0,101))
nums.remove(5)
missing_no(nums) #5)

nums = list(reversed(range(0,101)))
nums.remove(10)
missing_no(nums) #10)