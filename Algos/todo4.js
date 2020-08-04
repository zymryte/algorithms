// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount.
//  Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). 
// Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function keepTheLastFew(arr, x) {
    newarr = []

    for (i = arr.length - x; i < arr.length; i++) {

        newarr.push(arr[i])
    }

    return newarr
}

var a = keepTheLastFew([2, 4, 6, 8, 10], 3)
console.log(a)

// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation 
// Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely 
// reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).

function mathHelp(m, b) {
    var x
    x = -b / m
    return x
}
var b = mathHelp(2, 5)
console.log(b)

// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, 
// there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors 
// (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.


function whatHappensToday(day) {
    var result = ""
    if (day % 10 == 0) {
        result = "Today will be a volcano!"
    } else if (day % 15 == 0) {
        result = "Today will be a volcano!"
    }
    if (day % 20 == 0) {
        result = "Today will be a volcano!"
    }
    if (day % 10 == 0) {
        result = "Today will be a volcano!"
    }
}

// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter scores, 
// given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’,
//  60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. scores: B". 
// Given the score 61, log the string "Score: 61. scores: D".

function letterscores(scores) {
    var grade = ''
    if (scores >= 90) {
        grade = 'A'
    } else if (scores >= 80) {
        grade = 'B'
    } else if (scores >= 70) {
        grade = 'C'
    } else if (scores >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    result = "Score: " + scores + ". Grade: " + grade
    return result

}

var e = letterscores(88)
console.log(e)

// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, 
// and “+” signs to the top two percent of B, C and D scores (sorry,
//  Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. scores: B+". Given 61, log "Score: 61. scores: D-" .


function letterscores2(scores) {
    var grade = ''
    if (scores < 60) {
        grade = 'F'
    } else if (scores >= 60 && scores <= 62) {
        grade = 'D-'
    } else if (scores >= 68 && scores < 70) {
        grade = 'D+'
    } else if (scores > 62 && scores < 68) {
        grade = 'D'
    } else if (scores >= 70 && scores <= 72) {
        grade = 'C-'
    } else if (scores >= 78 && scores < 80) {
        grade = 'C+'
    } else if (scores > 72 && scores < 78) {
        grade = 'C'
    } else if (scores >= 80 && scores <= 82) {
        grade = 'B-'
    } else if (scores >= 88 && scores < 90) {
        grade = 'B+'
    } else if (scores > 82 && scores < 88) {
        grade = 'B'
    } else if (scores >= 90 && scores <= 92) {
        grade = 'A-'
    } else if (scores > 92) {
        grade = 'A'
    }
    result = "Score: " + scores + ". Grade: " + grade
    return result

}
var e = letterscores2(80)
console.log(e)

// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, 
// Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day,
// then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until 
// increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

function findIQ(IQ, day) {
    var percentage = 0.1
    for (i = 1; i <= day; i++) {
        IQ += percentage

    }
    return IQ
}

var d = findIQ(101, 98)
console.log(d)