// Absolute Value: This JavaSript Math Method that returns an absolute value of any given whole number or negative integer.
//  +10
//  -10

const absoluteValueNegative = Math.abs(-4.7);
const absoluteValuePositive = Math.abs(4.7);

// console.log(absoluteValueNegative + `\n` +  absoluteValuePositive);
// console.log(`${absoluteValueNegative} \n${absoluteValuePositive}`);





// Exponents and Roots

const toThePowerOf = Math.pow(4, 2);
    // {
    //     Explanation:
    //     Math.pow() is a JavaScript function that calculates the power of a number.
    //     It takes two parameters:
    //     The first parameter is the base number (the number you want to raise to a power).
    //     The second parameter is the exponent (the power to which the base number is raised).
    //     In the example:
    //     4 is the base number.
    //     2 is the exponent.
    //     The result of Math.pow(4, 2) is , which equals 16.

    //      Additional Notes:
    //      You can also use the exponentiation operator (**) in modern JavaScript as a shorthand for Math.pow():

            const usingExponentiationOperator = 4 ** 2;
    // }



const squareRoot = Math.sqrt(25);

    // Explanation:
    // Math.sqrt() is a JavaScript function that calculates the square root of a number.
    // It takes one parameter:
    // The number for which you want to find the square root.
    // In the example:
    // 25 is the number.
    // The result of Math.sqrt(25) is the square root of 25, which equals 5.
    
    // Key Points:
    // The Math.sqrt() function always returns a non-negative value (since the square root of a positive number is always non-negative).
    // If you pass a negative number to Math.sqrt(), it will return NaN (Not a Number) because the square root of a negative number is not a real number.

    const negativeSquareRoot = Math.sqrt(-25);
    // console.log(negativeSquareRoot);

    // console.log( Math.pow(81, 0.5))
    // console.log(81 ** 0.5)
    // console.log(Math.sqrt(81))
    


    // Additional Notes:
    // You can also calculate the square root using the exponentiation operator (**):
    const usingExponentiationOperatorTwo = 25 ** 0.5;



const cubeRoot = Math.cbrt(27);

    // Explanation:
    // Math.cbrt() is a JavaScript function that calculates the cube root of a number.
    // It takes one parameter:
    // The number for which you want to find the cube root.
    // In the example:
    // 27 is the number.
    // The result of Math.cbrt(27) is the cube root of 27, which equals 3.

    // Key Points:
    // The Math.cbrt() function works for both positive and negative numbers, as well as zero.
    // Unlike the square root, the cube root of a negative number is also a real number.

    // console.log(Math.pow(27, 1/3))

    // Additional Notes:
    // You can also calculate the cube root using the exponentiation operator (**):
    const usingExponentiationOperatorThree = 27 ** (1 / 3);



// console.log(toThePowerOf + `\n` + squareRoot + `\n` + cubeRoot);
// console.log(usingExponentiationOperator + `\n` + usingExponentiationOperatorTwo + `\n` + usingExponentiationOperatorThree);




// Maximum and Minimum

const maximumOfANumber = Math.max(1, 2, 3, 4, 5);

    // Explanation:
    // Math.max() takes one or more numbers as arguments.
    // It compares all the numbers and returns the maximum value.
    // In the example:
    // The numbers are 1, 2, 3, 4, 5.
    // The largest number in this list is 5.

    // Key Points:
    // If no arguments are provided, Math.max() returns -Infinity.
    // If any argument is not a number, it returns NaN.

const minimumOfANumber = Math.min(1, 2, 3, 4, 5);

    // Explanation:
    // Math.min() takes one or more numbers as arguments.
    // It compares all the numbers and returns the minimum value.
    // In the example:
    // The numbers are 1, 2, 3, 4, 5.
    // The smallest number in this list is 1.

    // Key Points:
    // If no arguments are provided, Math.max() returns -Infinity.
    // If any argument is not a number, it returns NaN.

// console.log(maximumOfANumber + `\n` + minimumOfANumber);






// Logarithmic and Exponential


const logarithmicValue = Math.log(2);

    // Explanation:
    // Math.log() is a JavaScript function that calculates the natural logarithm (base e) of a number.
    // It takes one parameter:
    // The number for which you want to find the natural logarithm.
    // In the example:
    // 2 is the number.
    // The result of Math.log(2) is the natural logarithm of 2, which is approximately 0.6931471805599453.

    // Key Points:
    // The Math.log() function works for both positive and negative numbers, as well as zero.
    // If you pass a negative number to Math.log(), it will return NaN (Not a Number) because the natural logarithm of a negative number is not a real number.

    // Additional Notes:
    // You can also calculate the natural logarithm using the exponentiation operator (**):
    const usingExponentiationOperatorFour = Math.E ** 1;



const logarithmicValueOfTen = Math.log10(100);

    // Explanation:
    // Math.log10() is a JavaScript function that calculates the base 10 logarithm of a number.
    // It takes one parameter:
    // The number for which you want to find the base 10 logarithm.
    // In the example:
    // 100 is the number.
    // The result of Math.log10(100) is the base 10 logarithm of 100, which is approximately 2.

    // Key Points:
    // The Math.log10() function works for both positive and negative numbers, as well as zero.
    // If you pass a negative number to Math.log10(), it will return NaN (Not a Number) because the base 10 logarithm of a negative number is not a real number.

    // Additional Notes:
    // You can also calculate the base 10 logarithm using the exponentiation operator (**):
    const usingExponentiationOperatorSix = 10 ** 1;





const exponentialValue = Math.exp(2);

    // Explanation:
    // Math.exp() is a JavaScript function that calculates the exponential value of a number.
    // It takes one parameter:
    // The number for which you want to find the exponential value.
    // In the example:
    // 2 is the number.
    // The result of Math.exp(2) is the exponential value of 2, which is approximately 7.3890560989306495.

    // Key Points:
    // The Math.exp() function works for both positive and negative numbers, as well as zero.
    // If you pass a negative number to Math.exp(), it will return NaN (Not a Number) because the exponential value of a negative number is not a real number.

    // Additional Notes:
    // You can also calculate the exponential value using the exponentiation operator (**):
    const usingExponentiationOperatorFive = 2 ** 1;



console.log(logarithmicValue + `\n` + exponentialValue + `\n` + logarithmicValueOfTen);
// console.log(usingExponentiationOperatorFour + `\n` + usingExponentiationOperatorFive);


// Trigonometric Functions

const sineValue = Math.sin(90 * Math.PI / 180);

    // Explanation:
    // Math.sin() is a JavaScript function that calculates the sine of an angle in radians.
    // It takes one parameter:
    // The angle in radians for which you want to find the sine.
    // In the example:
    // 90 is the angle in degrees.
    // The result of Math.sin(90 * Math.PI / 180) is the sine of 90 degrees, which is approximately 1.

    // Key Points:
    // The Math.sin() function works for both positive and negative angles, as well as zero.
    // If you pass a negative angle to Math.sin(), it will return the sine of the negative angle.
    // The Math.sin() function returns the sine of the angle in radians, not degrees.

    // Additional Notes:
    // You can also calculate the sine using the trigonometric identity:
    const usingTrigonometricIdentity = Math.sin(Math.PI / 2);


const cosineValue = Math.cos(0 * Math.PI / 180);

    // Explanation:
    // Math.cos() is a JavaScript function that calculates the cosine of an angle in radians.
    // It takes one parameter:
    // The angle in radians for which you want to find the cosine.
    // In the example:
    // 0 is the angle in degrees.
    // The result of Math.cos(0 * Math.PI / 180) is the cosine of 0 degrees, which is approximately 1.

    // Key Points:
    // The Math.cos() function works for both positive and negative angles, as well as zero.
    // If you pass a negative angle to Math.cos(), it will return the cosine of the negative angle.
    // The Math.cos() function returns the cosine of the angle in radians, not degrees.

    // Additional Notes:
    // You can also calculate the cosine using the trigonometric identity:
    const usingTrigonometricIdentityTwo = Math.cos(0);

const tangentValue = Math.tan(45 * Math.PI / 180);

    // Explanation:
    // Math.tan() is a JavaScript function that calculates the tangent of an angle in radians.
    // It takes one parameter:
    // The angle in radians for which you want to find the tangent.
    // In the example:
    // 45 is the angle in degrees.
    // The result of Math.tan(45 * Math.PI / 180) is the tangent of 45 degrees, which is approximately 1.

    // Key Points:
    // The Math.tan() function works for both positive and negative angles, as well as zero.
    // If you pass a negative angle to Math.tan(), it will return the tangent of the negative angle.
    // The Math.tan() function returns the tangent of the angle in radians, not degrees.

    // Additional Notes:
    // You can also calculate the tangent using the trigonometric identity:
    const usingTrigonometricIdentityThree = Math.tan(Math.PI / 4);

// console.log(sineValue + `\n` + cosineValue + `\n` + tangentValue);
// console.log(usingTrigonometricIdentity + `\n` + usingTrigonometricIdentityTwo + `\n` + usingTrigonometricIdentityThree)




// Sign of a Number

const signOfANumber = Math.sign(-42)
    // Explanation:
    // Math.sign() is a JavaScript function that returns the sign of a number.
    // It takes one parameter:
    // The number for which you want to find the sign.
    // In the example:
    // -42 is the number.
    // The result of Math.sign(-42) is -1, indicating that -42 is a negative number.

    // Key Points:
    // The Math.sign() function returns:
    // -1 if the number is negative.
    // 0 if the number is zero.
    // 1 if the number is positive.
    // NaN if the number is not a number.

const signOfANumberTwo = Math.sign(42)
const signOfANumberThree = Math.sign(0)

// console.log(signOfANumber + `\n` + signOfANumberTwo + `\n` + signOfANumberThree);





// Advanced Examples
// 1. Calculating Hypotenuse

    // Use the Pythagorean theorem 
    // c2=a2+b2 
    

    const getHypotenuse = (a, b) => 
        Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    // console.log(getHypotenuse(3, 4))

    
    const pependincular = Math.pow(3, 2)
    const base = Math.pow(4, 2)
    const hypotenuse = Math.sqrt(pependincular + base)
    // console.log(hypotenuse)



// 2. Simulating Dice Rolls
    const rollDice = () => 
        Math.floor(Math.random() * 6) + 1;
    // console.log(rollDice())


// 3. Calculating Compound Interest
    const calculateCompoundInterest = (principal, rate, time) => {
        const amount = principal * Math.pow((1 + rate / 100), time)
        return amount
    }
    // console.log(calculateCompoundInterest(1000, 5, 2));
    
    

