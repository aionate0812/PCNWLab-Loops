/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
const average = (arr) => {
    let sum = 0
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }
    arr.map((i,y)=>{
        sum += arr[y]
    })
    return sum/arr.length
}

console.log('average')
console.log(average([1,2,3,4]))

/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
const squareEach = (arr) => arr.map(e => e**2)
    
console.log("squareEach")
console.log(squareEach([1,2,3,4]))
/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/
const averageSquare = (arr) => average(squareEach(arr))

console.log("averageSquare")
console.log(averageSquare([1,2,3,4]))
/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
const negateArr = (arr) => {
let negativeArr = []
for (let i = 0; i < arr.length; i++) {
    negativeArr.push(arr[i]*-1)
}
return negativeArr
}

console.log("negateArr")
console.log(negateArr([1,2,3,4]))
/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
const reverseArr = (arr) => {
    reverseArray = []
    for (let i = arr.length-1; i >= 0 ; i--) {
        reverseArray.push(arr[i])
    }
    return reverseArray
}
console.log("reverseArr")
console.log(reverseArr([1,2,3,4]))
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

const negateBackwards = (arr) => {
    return negateArr(reverseArr(arr))
}

console.log("negateBackwards")
console.log(negateBackwards([1,2,3,4]))




