// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).
//  Ex.: sigma(3) = 6 (or 1 + 2 + 3) sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
    var sum = 0
    for (i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}
var a = sigma(3)
console.log(a)


// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number,
//  returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 
// For example, factorial(3) = 6 (or 1 * 2 * 3) factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

function factorial(num) {
    var result = 1
    for (i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

var b = factorial(5)
console.log(b)


// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and 
// asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. 
// Depending on which function is called, those stars should be left-justified (the first star would be very 
// first char in the text field), or right-justified (the last star would be very last char in the text field, 
// with potentially some number of spaces at beginning of text field before the block of stars start), or centered
//  in the 75-character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. 
// The last num characters should be asterisks the other 75 should be spaces.   
// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. 
// The middle num characters should be asterisks the rest of the 75 spaces.
// (Optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.


// function drawLeftStars(num) {
//     var result = ""
//     for (i = 1; 1 <= num; i++) {
//         result += "*"
//     }
//     return result

// }

// var c = drawLeftStars(6)
//     // console.log(c)

// function drawRightStars(num) {
//     var stars = ""
//     var count = 0

//     for (i = 0; i <= (75 - num); i++) {
//         stars += ""
//         if (i == 75 - num) {
//             while (count <= num) {
//                 count++
//                 stars += "*"
//             }
//         }

//     }

//     return stars
// }

var d = drawRightStars(5)
console.log(d)


// function drawCenteredStars(num) {
//     var stars = ""
//     var count = 0
//     var count2 = 0
//     for (var i = 0; i <= Math.floor((75 - num) / 2); i++) {
//         stars += " "
//         if (i == Math.floor((75 - num) / 2)) {
//             while (count < num) {
//                 count++
//                 stars += "*"
//                 if (count == num) {
//                     while (count2 < (75 - i - count)) {
//                         count2++
//                         stars += ""
//                     }
//                 }
//             }
//         }
//     }
//     return stars
// }
var t = drawCenteredStars(12)
console.log(t)