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