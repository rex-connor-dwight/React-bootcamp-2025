



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

    // Compare the date values (e.g., timestamps or strings)
    if (today.getTime() === new Date().getTime()) {
        delete bees.height;
    }

    console.table(bees);
};

simpleProject();

