// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length,
//  with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that 
// you cannot use a second array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().


function reverse(arr) {
    for (i = 0; i < (arr.length / 2); i++) {
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

var m = reverse([3, 1, 6, 4, 2])
console.log(m)




// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. 
// ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: 
// given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range.
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. No built-in array functions.


function rotateArr(arr, shiftBy) {
    var absValue = Math.abs(shiftBy)
    while (absValue > 0) {

        if (shiftBy > 0) {
            var temp = arr[arr.length - 1]

            for (i = arr.length - 1; i > 0; i--)
                arr[i] = arr[i - 1]
            arr[0] = temp

        } else {
            var temp = arr[0]
            for (i = 0; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1]
            }
            arr[arr.length - 1] = temp
        }
        absValue--;
    }
    return arr
}

console.log(rotateArr([1, 2, 3, 4], 2))


// function filterRange(arr, min, max) {
// 	for(i = 0; i < arr.length; i++) {
// 		if(arr[i] > min && arr[i] < max) {
// 			for( j = i; j < arr.length - 1; j++) {
//                 arr[j] = arr[j + 1]
//             }
//             arr.length = arr.length - 1
// 			i--;
// 		}
//     }
//     return arr
// }



// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second array’s elements.
//  Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].


function arrConcat(arr1, arr2) {
    for (i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }
    return arr1
}

var a = arrConcat(['a', 'b'], [1, 2])
console.log(a)