// Asynchronous Programming in JavaScript



// Understanding Synchronous vs Asynchronous Code

const synchronous = () =>{
    const framerOne = `Framer One`;
    const framerTwo = `Framer Two`;
    const framerThree = `Framer Three`;

    console.log(framerOne)
    console.log(framerTwo)
    console.log(framerThree)
}
// synchronous()

// Synchronous operations happen in sequence

const asynchronous = () =>{
    const framerOne = `Framer One`;
    const framerTwo = `Framer Two`;
    const framerThree = `Framer Three`;

    console.log(framerOne)

    setTimeout(() => {
        console.log(framerTwo)
    }, 2000)
    
    console.log(framerThree)
}
asynchronous()

// Understanding setTimeout in JavaScript

// Introduction to setTimeout
// setTimeout is a fundamental built-in function in JavaScript that allows you to execute code after a specified delay. It's one of the cornerstones of asynchronous programming in JavaScript, enabling you to schedule tasks to run in the future without blocking the main execution thread.

// Basic syntax
// setTimeout(callback, delay, param1, param2,);

// callback: The function to be executed after the delay
// delay: Time in milliseconds before executing the callback
// param1, param2, ...: Optional parameters to pass to the callback function

setTimeout(() => {
    // throw new Error (`Opps! can't find yout ID`) 
}, 2000)

// Common Use Cases and Patterns

// 1. Basic Delay
const timeOutOne = () => {
    setTimeout(() => {
        console.log(`Welcome Back John!`)
    }, 1000)
}
// timeOutOne()


// 2. Passing Parameters
const timeOutParam = ($name, $tittle) => {
    console.log(`Hello! ${$tittle} ${$name}`)
}

// setTimeout(timeOutParam, 4000, `Muna`, `Miss`)
// setTimeout(timeOutParam(`Muna`, `Miss`), 4000)



// 3. Clearing Timeouts
const timeOutTwo = setTimeout(() => {
    console.log(`This timout was cleared`)
}, 1000)

// clearTimeout(timeOutTwo)
const itCleared = clearTimeout(timeOutTwo) === clearTimeout(timeOutTwo)

if (itCleared){
    // console.log(`Yes! the timeout was cleared`)
} else{
    // console.log(`No! it wasn't`)
}


// Important Considerations
// 1. Minimum Delay
setTimeout(() => {
    // console.log(`Even if you set a delay of 0ms, the callback won't execute immediately`)
}, 0)
// console.log(`Main Code`)


// 2. Timer Accuracy
// Timer accuracy demonstration
const start = Date.now();
setTimeout(() => {
    const end = Date.now();
    // console.log(`Requested delay: 100ms`);
    // console.log(`Actual delay: ${end - start}ms`);
}, 100);






// Module 2: Callbacks

// Theory
// Callbacks are functions passed as arguments to other functions, which will be executed later. They were the original way to handle asynchronous operations in JavaScript.





