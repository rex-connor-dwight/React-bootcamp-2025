import person from './dataOne.js';


// const fullName = `Edward ${man}`
// const greatestnumber = Math.max(...scores);

const personKeys = Object.keys(person)

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// console.log(personKeys);
