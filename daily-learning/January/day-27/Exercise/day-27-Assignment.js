// 1: Using the Math.sqrt method, find the square root of the following numbers 24, 96, 48, 122  

// Solution:
const squaresofTheFollowing =  (param1, param2, param3, param4) => 
    console.log(
        Math.round(Math.sqrt(param1)), 
        Math.round(Math.sqrt(param2)), 
        Math.round(Math.sqrt(param3)),
        Math.round(Math.sqrt(param4))  
    )
squaresofTheFollowing(24, 96, 48, 122);

// Task 1:
// 	•	Write an arrow function named compareRoundingMethods(number) that takes a decimal number as input.
// 	•	Inside the function, use Math.round(), Math.ceil(), and Math.floor() on the input number.
// 	•	Return the results in an object format like this:

// {
//   rounded: 4,
//   ceil: 5,
//   floor: 4
// }

// Solution:

const compareRoundingMethods = (number) => 
    console.log(
        {
            rounded: Math.round(number),
            ceil: Math.ceil(number),
            floor: Math.floor(number)
        }
    )

compareRoundingMethods(19.567839)


// Task 2:
// 	•	Create a program that generates 10 random decimal numbers between 1 and 100.
// 	•	For each number, display the result of Math.round(), Math.ceil(), and Math.floor() in the console.

const randomDecimals = () => {
    const randomNum = {
        decimalOne: Math.random() * 100,
        decimalTwo: Math.random() * 100,
        decimalThree: Math.random() * 100,
        decimalFour: Math.random() * 100,
        decimalFive: Math.random() * 100,
        decimalSix: Math.random() * 100,
        decimalSeven: Math.random() * 100,
        decimalEight: Math.random() * 100,
        decimalNine: Math.random() * 100,
        decimalTen: Math.random() * 100
    }
    for (const key in randomNum) {
        randomNum[key] = Math.round(randomNum[key])
        randomNum[key] = Math.ceil(randomNum[key])
        randomNum[key] = Math.floor(randomNum[key])
    }
    console.table(randomNum)
    console.table(randomNum)
    console.table(randomNum)
}

randomDecimals()



