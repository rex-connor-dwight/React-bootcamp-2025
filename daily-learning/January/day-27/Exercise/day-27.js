

// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.SQRT2)
// console.log(Math.SQRT1_2)
// console.log(Math.LN2)
// console.log(Math.LN10)

// Assignments
// 1: Using the Math.sqrt method, find the square root of the following numbers 24, 96, 48, 122  
 
const squareSixteen = Math.sqrt(16) 
// console.log(squareSixteen)

const roundNum = Math.round(3.7)
// console.log(roundNum)

const roundNumTwo = Math.ceil(3.1)
// console.log(roundNumTwo)

const roundNumThree = Math.floor(3.9)
// console.log(roundNumThree)


const roundedNumber = Math.floor(Math.PI) 
// console.log(roundedNumber)

const truncatedNumber = Math.trunc(9.3)
// console.log(truncatedNumber)



// Assignment: Understanding Math.round(), Math.ceil(), and Math.floor()

// Objective:

// This assignment is designed to help you understand the difference between Math.round(), Math.ceil(), and Math.floor() in JavaScript by using them in various scenarios.

// Instructions:
// 	1.	Theory Questions
// Answer the following questions in your own words:
// 	•	What is the difference between Math.round(), Math.ceil(), and Math.floor()?
// 	•	What will Math.round(2.5) return? Why?
// 	•	How does Math.ceil() behave when the number is negative? Provide an example.
// 	2.	Practical Tasks
// Write a JavaScript program to perform the following tasks:
// Task 1:
// 	•	Write an arrow function named compareRoundingMethods(number) that takes a decimal number as input.
// 	•	Inside the function, use Math.round(), Math.ceil(), and Math.floor() on the input number.
// 	•	Return the results in an object format like this:

// {
//   rounded: 4,
//   ceil: 5,
//   floor: 4
// }


// Example Input: 4.3
// Example Output: { rounded: 4, ceil: 5, floor: 4 }
// Task 2:
// 	•	Create a program that generates 10 random decimal numbers between 1 and 100.
// 	•	For each number, display the result of Math.round(), Math.ceil(), and Math.floor() in the console.
// Task 3:
// 	•	Write a function calculateTotal(items) that takes an array of item prices (decimal numbers).
// 	•	Use:
// 	•	Math.round() to calculate the total rounded to the nearest integer.
// 	•	Math.ceil() to calculate the total rounded up.
// 	•	Math.floor() to calculate the total rounded down.
// 	•	Return an object with the three totals.
// Example Input: [10.5, 5.3, 8.8]
// Example Output:

// {
//   totalRounded: 25,
//   totalCeil: 26,
//   totalFloor: 24
// }


// 	3.	Challenge Question 
// Write a program that takes any positive or negative decimal number and determines whether Math.ceil() and Math.floor() return the same result for that number. Print a message indicating the result.
// Hint: For some negative numbers, Math.ceil() and Math.floor() behave differently.

// Submission:
// 	•	Submit your answers to the theory questions as a text file or document.
// 	•	Include the JavaScript code for the practical tasks and ensure it runs without errors.
// 	•	Include screenshots of the console output for each task to verify your results.

// Grading Criteria:
// 	•	Clarity of Explanation (20 points): Answers to theory questions are clear and correct.
// 	•	Code Accuracy (50 points): Code performs the specified tasks correctly.
// 	•	Output Verification (20 points): Console output matches the expected results.
// 	•	Challenge Completion (10 points, optional): Correct solution to the challenge question.


const randon = Math.floor(Math.random() * 50)
// console.log(randon)





