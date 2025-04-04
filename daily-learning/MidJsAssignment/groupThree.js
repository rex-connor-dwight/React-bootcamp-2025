// man(2, 6)



function man(a, b) {
    console.log(a + b) 
}




const woman = function(c, d) {
    console.log(c + d)
}
// woman(3, 7)




const child = () => console.log(`This is a child`)
// child()




const OurObject = {
    class: `React Bootcamp`,
    classStart: function(){console.log(`I am in ${this.class}`)}
}
// OurObject.classStart()

const myObj = {
    class: `React Bootcamp`,
    classStart: () => {console.log(`I am in ${myObj.class}`)}
}
// myObj.classStart()


const getTime = () => {

    const time = `$12AM`

    const timeDB = {
        $12AM: `This is early morning`,
        $1AM: `This is early morning`
    };
    for ( const keys in timeDB){
        
    }
    // console.log(typeof(time))

    switch ( time) {
        case timeDB.$12AM:
            console.log(`This is morning`);
            break;
        case `12PM`:
            console.log(`This is afternoon`);
            break;
        case `6PM`:
            console.log(`This is evening`);
            break;
        case `10PM`:
            console.log(`This is night`);
            break;
        default:
            console.log(`you are inbetween a seasson`)
    }
}
// getTime()

{
    const number = 7

    if (number % 2 === 0){
        // console.log(`Even`) 
    }else{
        // console.log(`Odd`) 
    }

    // console.log(number)
}

const  isEven = (num) => {
    if (num % 2 === 0){
        return `Even` 
    }else{
        return `Odd` 
    }
}

// console.log(isEven(6))

const gradeCalculator = (score) => {
    if( score >= 90){
        return `A`;
    }else if (score >=80){
        return `B`;
    }else if (score >= 70){
        return `C`;
    }else {
        return`F`
    }
}

// console.log(gradeCalculator(99))

const dayOfTheWeek = (num) => {
    switch (num) {
        case 1:
            return `Monday`;
            break;
        case 2:
            return `Tuesday`;
            break;
        case 3:
            return `Wednesday`;
            break;
        case 4:
            return `Thursday`;
            break;
        case 5:
            return `Friday`;
            break;
        case 6:
            return `Saturday`;
            break;
        case 7: 
            return `Sunday`;
            break;
        default:
            return `Please enter a number between 1 and 7`
    }
}
console.log(dayOfTheWeek(8))
