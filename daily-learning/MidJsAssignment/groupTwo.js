

// const dosu = {
//     name: `Dosu`,
//     height: `72km`,
//     skinColor: `Brown`,
// }

// console.log(dosu.height)

// console.log(dosu[`name`])

const calculator = {
    a: 4,
    b: 5,
    c: 6,
}

const myObject ={
    fruit: `Citrus`,
    fiber: `Wheat`,
    veges: `Tomato`,
    food:  () => {
        console.log(`${myObject.veges} is used to make food`)
    }
};

// myObject.food()


const person = {
    pName: `Amadi`,
    age: 39,
    gender: `Male`,
    greet: () => `Hello ${person.pName}`
}

// console.log(person.greet())

// 2.Create an object car with properties: brand, model, year. Add a method getCarInfo() that returns "This car is a [year] [brand] [model]".

const car = {
    brand: `Toyota`,
    model: `Camry`,
    year: 2022,
    getCarInfo: () => `This car is a ${car.year} ${car.brand} ${car.model}`
}


// 3.Add a new property color to the car object using bracket notation.

car[`color`] = `Yellow`
Object.assign(car, {isRegistered: true})
car.isRegistered = true

console.log(car.isRegistered)


