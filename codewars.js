//Factorial of number: 
//If number in range of 0-12 find factorial; if not throw RangeError
function factorialOfNumber(num){
    product = 1
    if (num > 0 && num < 13){
        for (let i = 1; i <= num; i++){
            product *= i;
        }
        console.log(product)
    } else if (num === 0){
        return 1

    } else {
        throw new RangeError('Number out of range. Choose a number between 0 and 12')
    }
}
factorialOfNumber(5)

//convert number to get square root of each number then concat together:
function numSquared(n){
    let stringSquared = '';
    let stringOfNum = n.toString();
    const arr = stringOfNum.split('').map(ele => {
        return ele ** 2;
    });
    const squaredArr = arr.forEach((e) => {
        stringSquared += e.toString()
    });
    console.log(stringSquared);
}
numSquared(9119)
