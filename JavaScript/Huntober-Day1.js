function fixMixUp(string){
    const mixUps = {
    '0' : 'O',
    '5' : 'S',
    '1' : 'I',
    '6' : 'G',
    '2' : 'Z',
    '7' : 'L',
    '3' : 'E',
    '8' : 'B',
    '4' : 'h',
    '9' : 'q'
};
const mixUps2 = {
   'O': '0',
    'S': '5',
    'I': '1',
    'G' : '6',
    'Z' : '2',
    'L' : '7',
    'E' : '3',
    'B' : '8',
    'h' : '4',
    'q' : '9'
};
console.log(string);
let newString = "";
for(let i = 0; i < string.length; i++){
    if(string[i] in mixUps){
        newString += mixUps[string[i]]
    }else if(string[i] in mixUps2){
        newString += mixUps2[string[i]]
    } else{
        newString += string[i]
    }
}
console.log(newString)

}
//put these things in an object
//go through string looking for either the key/value; if key is in it return value;
//if value is in it return key but iterate through it only once.
fixMixUp("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." )

