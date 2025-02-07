// JavaScript Loops

// JavaScript provides several types of loops:
// 1.for loop
// 2.while loop
// 3.do...while loop
// 4.for...in loop
// 5.for...of loop
// Each type of loop is useful in different scenarios.


// 1. The for Loop
// Syntax
// for (initialization; condition; increment/decrement) {
//     // Code to be executed
// }

const loopOne = () => {
    // let r = 1
    for (r = 0; r <= 5; r++) {
        console.log(`Iteration ` + r)
    }
    return r
}

// loopOne()

const loopTwo = (param) => {
    for (param; param <= 5; param ++) {
        console.log(`Parameter: ` + param)
    }
    return param
}
// loopTwo(3)

const loopThree = (verb) => {
    for (verb; verb >= 9; verb --){
        console.log(`Statement ` + verb)
    }
}
// loopThree(16)





// 2. The while Loop

// Syntax
// while (condition) {
    // Code to execute
// }

let city = 1
while (city <= 5){
    // console.log(`City ` + city)
    city ++
}

const loopFour = (num) => {
    while (num <= 9){
        console.log(`Number ` + num)
        num++
    }
}
// loopFour(1)


// 3. The do...while Loop

// Syntax
// do {
//     // Code to execute
// } while (condition);

const loopFive = (ace) => {
    do {
        console.log(`Room ` + ace)
        ace ++
    } while (ace <= 9)
}
// loopFive(1)


// 4. The for...in Loop

// Syntax
// for (key in object) {
//     // Code to execute
// }

const loopSix = () => {
    const rooms = {
        roomOne: `Ace`,
        roomTwo: `King`,
        roomThree: `Queen`,
        roomFour: `Jack`,
        roomFive: `Joker`,
        roomSix: `Lux`
    }
    for (const keys in rooms){
        console.log(`${keys}: ${rooms[keys]}`)
    }    
}
// loopSix()


// 5. The for...of Loop

// Syntax
// for (element of iterable) {
//     // Code to execute
// }

const loopSeven = () =>{
    const scores = [23, 78, 65, 32, 79, 83, 24, 72, 45]
    for (const score of scores){
        console.log(score)
    }
    for(let iterare = scores[8]; iterare <= 45; iterare--){
        console.log(iterare)
        if (iterare === 0) 
        break
    }
}
// loopSeven()

const loopsEight = (name)=> {
    for (const letter of name){
        console.log(letter)
    }
}
// loopsEight(`Hector`)
