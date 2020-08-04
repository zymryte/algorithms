// Given an array, write a function that changes all positive numbers in the array to “big”.
//  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function makeItBig(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }
    return arr;
}

var a = makeItBig([-1, 3, 5, -5])
console.log(a)


// Create a function that takes an array of numbers.
//  The function should print the lowest value in the array, and return the highest value in the array.

function printLow(arr) {
    var min = Math.min.apply(Math, arr)
    var max = Math.max.apply(Math, arr)
    console.log(min)
    return max
}

var b = printLow([6, 2, 1, 2, 3, -5])
console.log(b)


// Build a function that takes an array of numbers. The function should print 
// the second-to-last value in the array, and return first odd value in the array.

function secondToLast(arr) {
    var num;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            num = arr[i]
            break
        }
    }
    console.log(arr[arr.length - 2])

    return num;
}
var c = secondToLast([6, 3, 34, -2, 1])
console.log(c)


// Given an array, create a function to return a new array where each value in the original has been doubled. 
// Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2
    }
    return arr
}

var d = doubleVision([1, 2, 3])
console.log(d)



// Given an array of numbers, create a function to replace last value with the number of positive values. 
// Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
    var count = 0;
    for (i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            count++
        }
    }
    arr[arr.length - 1] = count
    return arr

}

var e = countPositives([-1, 1, 1, 1])
console.log(e)


// Create a function that accepts an array. Every time that array has three odd values in a row,
//  print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evensOdds(arr) {
    var result = ''
    var countEvens = 0;
    var countOdds = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            countEvens = 0;
            countOdds++
            if (countOdds == 3) {
                result = 'That is odd!'

            }
        } else if (arr[i] % 2 == 0) {
            countOdds = 0;
            countEvens++
            if (countEvens == 3) {
                result = 'Even more so!'
            }
        }

    }
    return result
}

var f = evensOdds([9, 1, 3, 4])
console.log(f)


// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

function incTheSecond(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            arr[i] += 1;
        }
        console.log(arr[i])
    }

    return arr
}

var j = incTheSecond([1, 4, 2, 3])
console.log(j)


// You are passed an array containing strings. Working within that same array, 
// replace each string with a number – the length of the string at previous array index – and return the array.

function previousLength(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}


var i = previousLength(['zuma', 'coding', 'coding'])
console.log(i)


// Build a function that accepts an array. 
// Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function sevenToMost(arr) {
    var newArr = []
    for (i = 1; i < arr.length; i++) {
        arr[i] += 7;
        newArr.push(arr[i])
    }
    return newArr
}

var l = sevenToMost([1, 2, 3, 12, 7])
console.log(l)



// Given array, write a function to reverse values, in-place. 
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

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


// Given an array, create and return a new one containing all the values of the provided array,
//  made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negative(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = -Math.abs(arr[i])
        }
    }
    return arr
}

var n = negative([1, -3, 5])
console.log(n)


// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".
//  If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
    var sum = 0;
    var result = ''
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            result = 'Yummy'
        } else {
            sum++;
        }
    }
    if (sum == arr.length) {
        result = "I'm hungry"
    }
    return result
}

var p = alwaysHungry(['dojo', 'food', 'something'])
console.log(p)


// Given array, swap first and last, third and third-tolast, etc.
// I nput[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].


function swapTowardCenter(arr) {
    for (i = 0; i < (arr.length / 2); i += 2) {
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}


var s = swapTowardCenter([1, 2, 3, 4, 5, 6])
console.log(s)


// Given array arr and number num, multiply each arr value by num, and return the changed arr.

function scaleTheArray(arr, num) {
    for (i = 0; i < arr.length; i++) {
        arr[i] *= num
    }
    return arr
}

var t = scaleTheArray([3, 4, 1], 5)
console.log(t)