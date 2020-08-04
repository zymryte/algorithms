// Create a function that accepts a number as an input. Return a new array that counts down by one, from
// the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countDown(num) {
    // while (!isNaN(num)) {
    var newArr = [];
    for (i = num; i > 0; i--) {
        newArr.push(i)
    }
    console.log(newArr.length)
    return newArr

}


var a = countDown(9)
console.log(a)

// Your function will receive an array with two numbers. Print the first value, and return the second.
function printAndReturn(num1, num2) {
    console.log(num1)
    return num2
}

var b = printAndReturn(2, 5)
console.log(b)


// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s 
// first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
    var first = arr[0];
    var sum = first + arr.length;
    return sum;
}

var c = firstPlusLength([8, 9, 2, 5, 4])
var c1 = firstPlusLength(['zuma', 9, 2, 5, 4]) // the output will be zuma5, this means it concatinates the string with the length of the array
var c2 = firstPlusLength([true, 9, 2, 5, 4]) // the output will be 6, because true is considered as value 1 whereas false as 0
console.log(c)

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value.
//  Print how many values this is. What will you do if the array is only one element long?

function valueGreaterThanSecond(arr) {
    var second = arr[1]
    var newArr = []
    var result = "There is nothing to compare to."
    if (arr.length == 1) {
        return result
    } else {
        for (i = 1; i < arr.length; i++) {
            if (arr[i] > second) {
                newArr.push(arr[i])
            }
        }
        return newArr
    }
}


var d = valueGreaterThanSecond([1, 4, 7, 3, 2, 9])
console.log(d)


// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function thisLength(num1, num2) {
    var arr = []
    for (i = 0; i < num1; i++) {
        arr.push(num2)
    }
    return arr
}

var e = thisLength(4, 2)
console.log(e)

// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; 
// if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitTheFirstValue(arr) {
    var first = arr[0];
    var result = "";
    if (first > arr.length) {
        result = "Too big!"
    } else if (first < arr.length) {
        result = "Too small!"
    } else {
        result = "Just right!"
    }
    return result
}

var f = fitTheFirstValue(['2,3,4,1'])
console.log(f)


// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, 
// and returns the equivalent temperature expressed in Fahrenheit degrees.

function celsiusToFahrenheit(cDegrees) {
    var fahr = (cDegrees * (9 / 5)) + 32;
    var result = cDegrees + " celsius is equal to " + fahr + " fahrenheit degrees."
    return result
}

var g = celsiusToFahrenheit(15)
console.log(g)


//  Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, 
//  so for this challenge just try a series of Celsius integer values starting at 200,
//  going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

// function celsiusEqualToFahreinheit(cDegrees) {
//     var result = "";
//     while (i < cDegrees) {
//         var fahr = (cDegrees * (9 / 5)) + 32;

//         if (cDegrees == fahr) {
//             result = cDegrees + " celsius is equal to " + fahr + " fahrenheit degrees."
//             break;
//         }
//         i--;
//         return result
//     }

// }
// var h = celsiusEqualToFahreinheit(200)
// console.log(h)