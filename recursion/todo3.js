// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 
// rBinarySearch([1,3,5,6],4) = false; 
// rBinarySearch([4,5,6,8,12],5) = true.


function rBinarySearch(arr, value) {
    var mid = Math.floor(arr.length / 2);
    if (arr[mid] == value) {
        return true;
    } else if (value < arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(0, mid), value);
    } else if (value > arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(mid, arr.length), value)
    } else {
        return false
    }
}


// The Tarai (Japanese: “to pass around”) function was created to profile recursive performance in various systems and 
// languages. Unlike other functions, numbers don't get particularly large, but the amount of recursion is significant.
//  The tarai function accepts three parameters and is defined as:
// tarai(x,y,z) == y, if x <= y (otherwise see rule #2);
// tarai(x,y,z) == tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)).
// Calling tarai(10,2,9) should return 9 (after recursing 4145 times!).

function tarai(x, y, z) {
    var result
    if (x <= y) {
        result = y
    } else {
        result = tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y))
    }
    return result
}

console.log(tarai(10, 2, 9))


// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer
// dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute
//  rGCF(123456,987654).

function rGCF(a, b) {
    var result
    if (a == b) {
        result = a
    } else if (a > b) {
        if ((a / b) % 1 === 0) {
            result = b;
        } else {
            result = rGCF(a - b, b);
        }
    } else if (a < b) {
        if ((a / b) % 1 === 0) {
            result = b;
        } else {
            result = rGCF(a, b - a);
        }

    }
    return result
}


// Create strSubsets(str). Return an array with every possible in-order character subset of str. 
// The resultant array itself need not be in any specific order – it is the subset of letters in each string that must
//  be in the same order as they were in the original string. Given "abc", return an array that includes 
// ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).