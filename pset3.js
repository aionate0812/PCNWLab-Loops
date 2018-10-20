const print = (obj) => {
    return console.log(obj)
    }

/*
    @func getMiddle
    @param {array} arr
    @return {array}
    @desc - get the middle item of an array
            if even number of elements, return the middle TWO items
            
    @example - getMiddle([1,2,3); // [3]
               getMiddle([1,2,3,4]); // [2,3]
*/
const getMiddle = (arr) => (arr.length%2)===0 ? arr.slice(arr.length/2,(arr.length/2)+2) : arr.slice(arr[Math.floor(arr.length/2)])
     
print(getMiddle([1,2,3]))
print(getMiddle([1,2,3,4]))

/*
    @func addToMiddle
    @param {array} arr
    @param {anything} element
    @return {array}
    @desc - add element to the middle of array
            if odd number of elements, add after middle
            
    @example - addToMiddle([1,2,3], 0); // [1,2,0,3];
               addToMiddle([1,2,3,4], 0); // [1,2,0,3,4]
*/
const addToMiddle = (arr,anything) => {
    if ((arr.length%2)===0){
        arr.splice(arr.length/2,0,anything)
       
    } else  {
        arr.splice(Math.ceil(arr.length/2),0,anything)
   
}
return arr
}

console.log(addToMiddle([1,2,3], 0))
console.log(addToMiddle([1,2,3,4], 0))
/*
    @func hasAtSymbol
    @param {string} email
    @return {boolean}
    @desc - return true if '@' present in string
    @example - hasAtSymbol('taq@karim.com'); // true
               hasAtSymbol('foobar'); // false
*/
const hasAtSymbol = (str) => {
return str.includes('@')
}

print(hasAtSymbol('taq@karim.com'))
print(hasAtSymbol('foobar'))
/*
    @func capitalize
    @param {string} str
    @returns {string}
    
    @desc - capitalize the FIRST letter of string
    @example - capitalize('taq'); // 'Taq'
               capitalize('Taq'); // 'Taq'
*/
const capitalize = str => str[0].toUpperCase()+str.slice(1)

print(capitalize('taq'))
print(capitalize('Taq'))

/*
    @func isAllUpperCased
    @param {string} str
    @returns {boolean}
    
    @desc - return true if all caps else false
    @example isAllUpperCased('TAQ'); // true
             isAllUpperCased('tAq'); // false
*/
const isAllUpperCased = (str) => str.toUpperCase() === str ? true :false
    
print(isAllUpperCased('TAQ'))
print(isAllUpperCased('tAq'))
/*
    @func capitalizeEachWord
    @param {string} str
    @returns {string}
    
    @desc - returns string with each WORD capitalized
    @example - capitalizeEachWord('the cow jumped over the fence')
               // 'The Cow Jumped Over The Fence'
*/
const capitalizeEachWord = (str) => {
    const strArray = str.split(' ')
    strArray.forEach((element,index,strArray) => {
        strArray[index] = capitalize(element)
    });
    return strArray.join(' ')
}

print(capitalizeEachWord('the cow jumped over the fence'))
/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}
    
    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/
const capitalizeEachWordWithExceptions = (str, arr) => {
    const strArray = str.split(' ')
    strArray.forEach((element,index,strArray) => {
        arr.forEach((i)=>{
            if(i === element) {
                strArray[index] = capitalize(element)
            }
        })
        
    });
    return strArray.join(' ')
}

print(capitalizeEachWordWithExceptions(
    'the cow and a fox went on the trip', 
    ['the', 'and', 'a', 'on']
   ))
/*
    @func findAtMentions
    @param {string} tweet
    @returns {array}
    
    @desc - returns array with all the @mentions
    @example - 
        findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar')
        // ['the_taqquikarim', 'someOtherGuy', 'etc', 'foobar']
*/
const hasAt = (str) => str[0]=== '@' ? true : false

const findAtMentions = (str) => {
const arr = str.split(" ")
const returnArr = []
arr.forEach((e) => {
if(hasAt(e)){
returnArr.push(e.slice(1))
}
})
return returnArr
}

print(findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar'))

/*
    @func roundToN
    @param {number} num
    @param {number} decimalPlaces
    @returns {number}
    
    @desc - rounds to the decimalPlaces
    @example - roundToN(1123.1234, 3); // 1123.123
*/
const roundToN = (num, place) => {
return num.toFixed(place)

}
print(roundToN(1123.1234, 3))
/*
    @func addArrays
    @param {array} arrays
    @returns {array}
    
    @desc - adds arrays together
    @example - addArrays([
        [1,2,3],
        [4,5],
        [6,7,8,9]
    ]); // [1,2,3,4,5,6,7,8,9]
*/

const addArrays = (arr) => {
return arr.join(",").split(",")
}
print(addArrays([
    [1,2,3],
    [4,5],
    [6,7,8,9]
]))