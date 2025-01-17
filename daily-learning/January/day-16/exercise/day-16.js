// / a function is a JS reuseable block of code

function greet(){
    console.log(`Hello World`);
}

// greet()

function greetUser(name){
    console.log(`hello ${name}`);
}
// const userName = "Muna"
// greetUser(userName)
// greetUser("Muna")


// const bootCampStudents = {
//     name: `Muna`,
//     age: 22,
//     course: `Web Dev`
// }


// console.log(bootCampStudents[`course`])










function add(num1, num2){
    return  num2 * num1 ;
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



const goodMorning = () => 
    console.log (`Hello World`);

// goodMorning()




const myName = (surName) => 
    `${surName} Rex-Connor`;

// console.log(myName(`Benjamin`))










const deff = (a, b) => 
    a * b ;

// console.log(deff(2, 3));










// The parameter to be passed should be whatIAmBreathing


// function breathing(whatIAmBreathing) {
//     console.log(`I am breathing ${whatIAmBreathing}`);
// };


// breathing(`Oxygen`)


const breathing =function() {
    console.log(`I am breathing`);
};



const arrowfunction = (param1, param2) => 
    param1 * param2



console.log(arrowfunction(2, 3));