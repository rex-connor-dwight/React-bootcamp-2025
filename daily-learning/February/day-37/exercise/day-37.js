



// for (param1; param2; param3){

// }
// where: 
// param1 is the initialization
// param2 is the condition
// param3 is the increament or decrement

const muna = (age) => {
    const height = 5.8;
    return height + age
}
// console.log(muna(12))

const edward = (age, height ) => {
    return height + age
}
// console.log(edward(12, 5.8))

// const today = new Date()
// console.log(today)

const simpleProject = () => {
    const bees = {
        name: `Indigo`,
        color: `Red`,
        height: 24,
        skin: `Slik`
    };
    const today = new Date();
    // console.log(new Date())

    // Compare the date values (e.g., timestamps or strings)
    if (today.getTime() === new Date().getTime()) {
        // delete bees.height;
        bees.breed = `Careebean`
    }

    console.table(bees);
};

// simpleProject();

// for (accountBalance = 0; accountBalance >= 0; accountBalance++){
//     console.log(`Money na water ${accountBalance}`)
//     if (accountBalance === 10) break
// }


let x = 1
while (x <= 5){
    // console.log(`Number ${x}`)
    x++
}


let ox = 6
do {
    // console.log(`This is Number ${ox}`)
    ox++
} while(ox <= 20)




const valentinePackage = {
    Standard: 27000,
    Premium: 45000,
    Deluxe: 60000,
    Executive: 100000
}

for (const crystalClear in valentinePackage){
    // console.log(valentinePackage[crystalClear])
}




const arrayOne = [27000, 45000, 60000, 100000]
// console.log(arrayOne[0])

const johnsBag = {
    blue: `Mathematics`,
    green: `English`,
    yellow: `Chemistry`,
    red: `Biology`
}

// const ofc = `blue`

// console.log(johnsBag[ofc])

// console.log(johnsBag[`blue`])
// console.log(johnsBag.blue)




const subjects = [
    `Mathematics`,
    `English`,
    `Chemistry`,
    `Biology`,
    `Physics`,
    `Geography`,
    `Economics`,
    `Agriculture`,
    `Government`,
    `Literature`,
    `History`,
    `Commerce`,
    `Accounting`
]

for( const subject of subjects){
    // console.log(subject)
}

// const num = `Kamdilikachi`;
for ( const digits of arrayOne){
    // console.log(digits)
}

const finalLoop = () =>{
    for(let p = 1; p <= 5; p++){
        for( let q = 1; q <=5; q++){
            console.log(`Q=${q} : P=${p}`) 
        }
    }
    
}
finalLoop()




