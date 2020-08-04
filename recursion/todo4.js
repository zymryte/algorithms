// Given the first node of a singly linked list, create a recursive function that returns the number of nodes in that 
// list. Assume list contains no loops and is short enough that you will not ‘blow your stack’.

function rListLength(node) {

}


// Martin loves grapes. He sees a number of baggies containing grapes, all in a row. Stephen tells him that he can take 
// as many of the baggies as he wants, as long as he doesn’t take two that are next to each other. Martin wants to 
// maximize his number of grapes. Grapes are pretty healthy, so let’s help him out. Create a function to accept an array
//  of non-negative integers representing the number of grapes in each adjacent baggy. Your function should return the 
// maximum number of grapes he can obtain.


function grapes(arr) {
    var result
    for (i = 0; i < arr.length; i++) {
        result = grapes(arr)
    }
}


// Nikki has a new phone number (304-5083) and wants to create a clever way for everyone to remember it. 
// On older telephones, the keypad associates letters with each numeral. Given a seven-digit telephone number, 
// return an array of all possible strings that equate to that phone number. For reference, here is the mapping: 
// [2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] – for completeness, map 1 to I and zero to O. 
// For example, given a phone number 818-2612, return an array of 243 different strings, including “vitamic” and 
// “titania”. 


function telephoneWords(num)