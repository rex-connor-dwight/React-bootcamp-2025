// JavaScript Errors and Error Handling

// Types of Errors in JavaScript

// 1. Syntax Errors (SyntaxError)
// Syntax errors occur when the JavaScript engine encounters code that violates the language syntax rules.

// Example
const name = `Hectro`
// console.log(`Hello`  name)


// 2. Reference Errors (ReferenceError)
// A reference error occurs when trying to access a variable that has not been declared.

// Example
// const myVar = myVar
// console.log(myVar)


// 3. Type Errors (TypeError)
// Type errors occur when a value is used in an inappropriate way.

// Example
const thisNum = 20
// console.log(thisNum.toUpperCase())

// const woman = `victoria`;
// console.log(woman.toUpperCase())

const array = [20, 63, 23, 49]
// console.log(array.toUpperCase())


// 4. Range Errors (RangeError)
// A range error occurs when a value is out of an allowable range, such as an invalid array length.

// Example
// eval("console.log('Hello)");


// Error Handling in JavaScript
// To handle errors effectively, JavaScript provides the try...catch...finally and throw statements.


// 1. try...catch Block
// The try block runs a piece of code, and if an error occurs, the catch block executes.

// Example
const newVariables = `Amazing`;
try{
    // console.log(newVariable)
}catch (error){
    // console.log(`An Error Occured`, error.message)
};


// 2. throw Statement
// You can manually generate errors using the throw keyword.

// Example
const gender =`NonBinary`
if (!gender === `Male` || `Female`){
    // throw new Error(`You must be either a male or female`)
}

const valPackage = (hasPartner) =>{
    if (!hasPartner){
        throw new Error(`Sorry, you don't have a Val Package`)
    }
    return `Send Your Account for 2 million`
}

try{
    // console.log(valPackage(true));
}catch (error){
    console.log(error.message)
}


// 3. finally Block
// The finally block always runs after try and catch, regardless of whether an error occurred.

// Example
// const beta = 34;
try{
    console.log(beta)
}catch (error){
    throw error.message
}finally{
    console.log(`All Done`)
}


