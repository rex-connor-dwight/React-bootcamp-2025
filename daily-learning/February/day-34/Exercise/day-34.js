// JavaScript Conditional Statements

// 1.if statement
// 2.if...else statement
// 3.if...else if...else statement
// 4.switch statement
// 5.Ternary operator (? :)
// 6.Logical Operators (&&, ||, !)

// 1. The if Statement
// if (condition) {
//   // code block to be executed if the condition is true
// }


// const isLoggedIn = true;
// if (isLoggedIn === true) {
//     console.log(`This user is logged in`);
// }


// 2. The if...else Statement
// if (condition) {
//   // code block to be executed if the condition is true
// } else {
//   // code block to be executed if the condition is false
// }

// const isVerified = true;
// if (isVerified === true) {
//     console.log(`This user is verified`);
// } else {
//     console.log(`This user is not verified`);
// }


// 3. The if...else if...else Statement
// if (condition1) {
//   // code block to be executed if condition1 is true
// } else if (condition2) {
//   // code block to be executed if condition2 is true
// } else {
//   // code block to be executed if all conditions are false
// }

const speed = 10;

// if (speed >= 150)
//     console.log(`You are on a very high speed`);
// else if (speed >= 100)
//     console.log("A bit too high but that's fine");
// else (speed >= 0 )
//     console.log("Right on track");



// The switch Statement
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// const day = `Monday`;
// switch (day) {
//     case `Monday`:
//         console.log(`Today is Monday`);
//         break;
//     case `Tuesday`:
//         console.log(`Today is Tuesday`);
//         break;
//     case `Wednesday`:
//         console.log(`Today is Wednesday`);
//         break;
//     case `Thursday`:
//         console.log(`Today is Thursday`);
//         break;
//     case `Friday`:
//         console.log(`Today is Friday`);
//         break;
//     case `Saturday`:
//         console.log(`Today is Saturday`);
//         break;
//     case `Sunday`:
//         console.log(`Today is Sunday`);
//         break;
//     default:
//         console.log(`Invalid day`);
// }



// 5. The Ternary Operator (? :)
// condition ? expressionIfTrue : expressionIfFalse;

const age = 14;
const canVote = age >= 18 ? `Can vote` : `Cannot vote`;
// console.log(canVote);




// 6. Logical Operators in Conditions
// && (AND), || (OR), ! (NOT)

// && (AND)
const person = `man`;
const isStraight = false;

const checkOne = person === `man` && isStraight === true ? `This person is a straight man` : `This person is not a man or is not straight`; 
// console.log(checkOne);

// if (person === `man` && isStraight === true) {
//     console.log(`This person is a straight man`);
// } else if (person === `woman` && isStraight === true) {
//     console.log(`This person is not a man but a straight person`);
// } else if (person === `man` && isStraight === false) {
//     console.log(`hmm`);
// }

const isTired = true;
const hasWork = true;
const whatsPopping = () => {
    const o1 = isTired === true && hasWork === true ? `This user is tired but has a lot do` : `this user dey try sha`;
    return o1
}
// console.log(whatsPopping());



// || (OR)
const isTutor = `John`;
const password = `*&08379%$7`;

const loginUser = isTutor === `James` || isTutor === `John` && password === `*&08379%$7` ? `This is a tutor` : `This is not a tutor`;
// console.log(loginUser)



// const tutorDirectory = {
//     tutorOne: `Adam`,
//     tutorTwo: `James`,
//     tutorThree: `John`,
//     tutorFour: `Jane`,
//     tutorFive: `Jill`,
// }

// console.log(Object.values(tutorDirectory))

// for (const keys in tutorDirectory) {
//     console.log (tutorDirectory[keys])
// }
// console.log(tutorDirectory[keys])

// const checkTwo = isTutor === `keys` || isTutor === `Muna` && password === `*&08379%$7` ? `This user is a tutor` : `This user is not a tutor`;
// // console.log(checkTwo);


// const simpleProject = () => {
//     const isTutor = `fff`;
//     const password = `*&08379%$7`;  

//     const message = true;
//     const checkMessage = (message === true) ? `This user is a tutor` : `This user is not a tutor`;

//     const tutorDirectory = {
//         tutorOne: `Adam`,
//         tutorTwo: `James`,
//         tutorThree: `John`,
//         tutorFour: `Jane`,
//         tutorFive: `Jill`,
//     };

//     for (const keys in tutorDirectory) {
//         if (isTutor === tutorDirectory[keys] && password === `*&08379%$7`) {
//             checkMessage;
//             break;
//         } else {
//             checkMessage;
//         }
//     } 
//     return checkMessage

// }

// console.log(simpleProject());




// Example with ! (NOT)
const isTemuProduct = false

if (!isTemuProduct){
    console.log(`order for free`)
} else {
    console.log(`order for paid`)
}