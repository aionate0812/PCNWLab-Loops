const print = (obj) => {
return console.log(obj)
}
/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
const removeNegatives = (arr) => {

   let positiveArr = arr.map((e,i)=>{
    if (e < 0){
        e *= -1
        return e
    }
    return e

})
    return positiveArr
}


    //     let newArr = []
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<0){
//         newArr.push(arr[i]*-1)
    
//     }else newArr.push(arr[i])
// }
// return newArr
// }

print(removeNegatives([-3,-2,1,2,3,-4]))
/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
const findVal = (arr, anything) => arr.lastIndexOf(anything)

// const findVal = (arr, val) =>{
//     for(let i=0; i< arr.length; i++){
//         if (arr[i] === val){
//             return i
//         }
//     }
//     return -1
// }
print("find val")
print(findVal([1,2,3,4], 1))
print(findVal([1,2,3,4], 4))
print(findVal([1,2,3,4], 9))
/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/
const removeOdds = (arr) => arr.filter(number => (typeof number) === 'number' && (number%2) === 0);

print('remove odds')
print(removeOdds([1,2,3,4]))
print(removeOdds([1,"2",3,4]))

/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
const addSquares = (arr) => {
    const copyArr = arr

    arr.forEach(element => {
        copyArr.push(element ** 2)
        
    });
return copyArr
}

print(addSquares([1,2,3,4]))
/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

const doubleify = (arr) => arr.concat(arr).sort()

print(doubleify([1,2,3,4]))
/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/
const findMax = (arr) => {
return arr.sort((a, b) => a - b)[arr.length-1]

}

print(findMax([1,2,10000,999,3,99,4]))