#The Coupon Code
#Story
# Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

# Task
# Your mission:
# Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

# A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

# Examples:
# checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  == True
# checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  == False

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    #Code here!
    from datetime import datetime
    current_date_object = datetime.strptime(current_date, "%B %d, %Y")
    coupon_date_object = datetime.strptime(expiration_date, "%B %d, %Y")
    if type(entered_code) is str:
        if entered_code == correct_code:
            if current_date_object <= coupon_date_object:
                return True
            else:
                return False
        else:
            return False   
    else:
        return False



        #or

from datetime import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    c_date = datetime.strptime(current_date, '%B %d, %Y')
    e_date = datetime.strptime(expiration_date, '%B %d, %Y')
    return entered_code is correct_code and c_date <= e_date