//beginner challenges 

// 1. Return the sum of two numbers 
// create a function that takes two arguments as a function and return their sum

// function addition(num1, num2) {
//     return num1 + num2
// }

// console.log(addition(3, 2))

// function addition(num1, num2) {
//     return num1 + num2
// }

// console.log(addition(-3, -6))

function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(7, 3));

// 2. Create a function that converts hours into seconds

const secondsInAnHour = 3600;

// function hoursIntoSeconds(hours) {
//     return hours * secondsInAnHour
// }

// console.log(hoursIntoSeconds(2));


// function hoursIntoSeconds(hours) {
//     return hours * secondsInAnHour
// }

// console.log(hoursIntoSeconds(10));

function hoursIntoSeconds(hours) {
    return hours * secondsInAnHour
}

console.log(hoursIntoSeconds(24));

// 3. Calculate the perimeter of a rectangle

// function calcPerimeter(length, width) {
//     return 2 * length + 2 * width
// }

// console.log(calcPerimeter(6, 7));

// function calcPerimeter(length, width) {
//     return 2 * length + 2 * width
// }

// console.log(calcPerimeter(20, 10));

function calcPerimeter(length, width) {
    return 2 * length + 2 * width
}

console.log(calcPerimeter(2, 9));

// 4. Calculate the area of a Triangle 

// function calcTriangleArea(base, height) {
//     return .5 * base * height
// }

// console.log(calcTriangleArea(3, 2));

// function calcTriangleArea(base, height) {
//     return .5 * base * height
// }

// console.log(calcTriangleArea(10, 10));

function calcTriangleArea(base, height) {
    return .5 * base * height
}

console.log(calcTriangleArea(20, 20));

// 5. Extend a string
// Write a function that accepts a string and adds "Frontend" onto the end of it

// function appendFrontend(fruit) {
//     return fruit + 'Frontend';
// }

// console.log(appendFrontend('Apple'))

// function appendFrontend(fruit) {
//     return fruit + 'Frontend'
// }

// console.log(appendFrontend('Banana'));

function appendFrontend(fruit) {
    return fruit + 'Frontend';
}

console.log(appendFrontend('Orange'));

// 6. Greater Than 100?
// given two numbers, return true if the sum of both numbers is greater than 100 Otherwise, return false

// function sumGreaterThan100(num1, num2) {
//     return num1 + num2 > 100;
// }

// console.log(sumGreaterThan100(20, 10));

// function sumGreaterThan100(num1, num2) {
//     return num1 + num2 > 100;
// }

// console.log(sumGreaterThan100(50, 60));

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(100, -50));

//  7. less than or equal to 0
// write a function that acceps a numer and returns true if it is less than or equal to zero, otherwise retrun false

// function lessThanOrEqualToZero(num1) {
//     return num1 <= 0;
// }

// console.log(lessThanOrEqualToZero(3));

// function lessThanOrEqualToZero(num1) {
//     return num1 <= 0;
// }

// console.log(lessThanOrEqualToZero(0));

function lessThanOrEqualToZero(num1) {
    return num1 <= 0;
}

console.log(lessThanOrEqualToZero(-2));

// 8. Opposite boolean
// Given a boolean (true of false), return the opposite boolean

// function oppositeBoolean(bool) {
//     return !bool
// }

// console.log(oppositeBoolean(true));

function oppositeBoolean(bool) {
    // when ever you put ! infront of boolean it will return the opposite
    return !bool;
}

console.log(oppositeBoolean(false));

// 9. Is not the number 0
// Given ANY element, return true if it is NOT the number 0

// function isNotZero(num) {
//     return num !== 0;
// }

// console.log(isNotZero(5));

// function isNotZero(num) {
//     return num !== 0;
// }

// console.log(isNotZero(0));

function isNotZero(num) {
    return num !== 0;
}

console.log(isNotZero(null));

//  10. Calculate the remainder
//  Given two numbers, return their remainder when divided by each other

// function calcRemainder (num1, num2) {
//     return num1 % num2;
// }

// console.log(calcRemainder(4, 2))

// function calcRemainder(num1, num2) {
//     return num1 % num2;
// }

// console.log(calcRemainder(7, 8));

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(9, 8));

// 11. Is the number odd
// Given two numbers, retrun true if the number is odd

// function isOdd(num) {
//     return num % 2 === 0 
    
// }

// console.log(isOdd(1));

// function isOdd(num) {
//     return num % 2 === 0;
// }

// console.log(isOdd(2));

function isOdd(num) {
    return num % 2 === 0;
}

console.log(isOdd(3));

// 12. if a bumber is even, return 1 otherwise return -1
// create a function that takes a number argumetn and returns 1 if the number is even. if the number is odd return -1

// function booleanInteger(num) {
//    return num % 2 === 0 ? 1 : -1;
// }
// console.log(booleanInteger(1))

// function booleanInteger(num) {
//     return num % 2 === 0 ? 1 : -1;
// }

// console.log(booleanInteger(2));

function booleanInteger(num) {
    // ternary operator ? 1 : -1; if value on left is true return or 1 or return -1
    return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(5));

// 13. Check if a user is logged in AND subscribed
/** Create a function that takes in two strings. 
   if the first string is equal to 'LOGGED_IN' AND the second
   string is equal to 'SUBSCRIBED' return true, otherwise
   return false **/ 

// function isLoggedInAndSubscribed(string1, string2) {
//     return string1 === 'LOGGED_IN' && string2 === 'SUBSCRIBED' ? true : false;
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));

// function isLoggedInAndSubscribed(string1, string2) {
//     return string1 === 'LOGGED_IN' && string2 === 'SUBSCRIBED' ? true : false;
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));

// function isLoggedInAndSubscribed(string1, string2) {
//     return string1 === 'LOGGED_IN' && string2 === 'SUBSCRIBED' ? true : false;
// }

// console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));

// 14. Check if a user is logged in OR sunbscribed
/** Create a function that takes in two Strings. 
 * if the first string is equal to 'LOGGED_IN' OR the second
 * string is equal to 'SUBSCRIBED' return true, 
 * otherwise return false
 */

// function isLoggedInAndSubscribed(string1, string2) {
//     return string1 === 'LOGGED_IN' || string2 === 'SUBSCRIBED' ? true : false;
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));

// function isLoggedInAndSubscribed(string1, string2) {
//     return string1 === 'LOGGED_IN' || string2 === 'SUBSCRIBED' ? false : true;
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))

function isLoggedInAndSubscribed(string1, string2) {
    return string1 === 'LOGGED_IN' || string2 === 'SUBSCRIBED' ? false : true;
}

console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));