// / a function is a JS reuseable block of code

function greet(){
    console.log("Hello World");
}

// greet()

function greetUser(name){
    console.log(`hello ${name}`);
}
// const userName = "Muna"
// greetUser(userName)
// greetUser("Muna")

function add(num1, num2){
    return num1 + num2;
}
// const sum = add(2,3);   
// console.log(sum);
// console.log(add(2, 3));

const greetings = function(){
    console.log("Hello World");
}
// greetings()

const genderSearch =  function(gender){
    const female = `Muna`
    const male = `John`
    if (gender === `female`){
        console.log(`hello ${female}`)
    } else {
        console.log(`hello ${male}`)
    }
}

// genderSearch(`female`)

const myName = (surName) => 
    `${surName} Rex-Connor`;

console.log(myName(`Benjamin`))

const deff = (a, b) => 
    a * b ;

// console.log(deff(2, 3));

