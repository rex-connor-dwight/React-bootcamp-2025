/*
const statesAndCapital = {
    Abia: `Umuahia`,
    Adamawa: `Yola`,
    AkwaIbom: `Uyo`,
    Anambra: `Awka`,
    Bauchi: `Bauchi`,
    Bayelsa: `Yenagoa`,
    Benue: `Makurdi`,
    Borno: `Maiduguri`,
    CrossRiver: `Calabar`,
    Delta: `Asaba`,
    Ebonyi: `Abakaliki`,
    Edo: `Benin City`,
    Ekiti: `Ado Ekiti`,
    Enugu: `Enugu`,
    Gombe: `Gombe`,
    Imo: `Owerri`,
    Jigawa: `Dutse`,
    Kaduna: `Kaduna`,
    Kano: `Kano`,
    Katsina: `Katsina`,
    Kebbi: `Brakel`,
    Kogi: `Lokoja`,
    Kwara: `Ilorin`,
    Lagos: `Ikeja`,
    Nasarawa: `Lafia`,
    Niger: `Minna`,
    Ogun: `Abeokuta`,
    Ondo: `Akure`,
    Osun: `Oshogbo`,
    Oyo: `Ibadan`,
    Plateau: `Jos`,
    Rivers: `Port Harcourt`,
    Sokoto: `Sokoto`,
    Taraba: `Jalingo`,
    Yobe: `Damaturu`,
    Zamfara: `Gaura`,
    FCT: `Abuja`,
}


// for (const state in statesAndCapital) {
//     console.log(`${state} : ${statesAndCapital[state]}`);
// }

// Object.keys()
const printObjectkeys = () => console.log(Object.keys(statesAndCapital))
// printObjectkeys()

// Object.values()
const printObjectValues = () => console.log(Object.values(statesAndCapital))
// printObjectValues()

// Object.entries()
const printObjectEntries = () => console.log(Object.entries(statesAndCapital))
// printObjectEntries()


// const isMarried  = `true`
// const isGraduated = true

// if (isMarried === true) {
//     console.log(`Married`);
// } else {
//     console.log(`Not Married`);
// }


const personDetailsOne = {
    name: "John",
    age: 30,
    city: "New York"
}

const personDetailsTwo = {
    isGraduated: true,
    career: `Developer`,
    isMarried: false,
}

//Object.assign()
const assignBothBojects = Object.assign(personDetailsOne, personDetailsTwo)
// console.log(assignBothBojects);
*/

// Assignment and Answer.
// 1: Create an object called targetOne, targetTwo and targetThree, each object should have a diffrent key and value pairs, using the Object.assign method, assign the three above object to a new object called source.

const targetOne = {
    wealth: 'money',
    houuse: 'home',
    family: 'blood'
};

const targetTwo = {
    education: 'key',
    knowledge: 'power',
    understanding: 'light'
};

const targetThree = {
    Jane_Austen: 'Love and Romance',
    Henry_David: 'Nature',
    Leo_Tolstoy: 'Life',
    George_Orwell:'Cruel Reality'
};

const source = Object.assign({}, targetOne, targetTwo, targetThree);

console.log(source);
// returns: { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4', key5: 'value5', key6: 'value6' }


// 2: Create a frozen object called subZero using the Object.freeze method, add a new property to the object.
const subZero = Object.freeze({
    morning: 'breakfast',
    afternoon: 'launch',
    evening: 'dinner'
});

//Adding a new key value pair to the frozen object.
subZero.midNoon = 'brunch';

console.log(subZero);


// 3: Create an sealed object called lockDown using the Object.seal method, delete an existing property, add a new property, then modify an existing property
const lockDown = Object.seal({
    liu_kang: 'bicycle kick',
    kitana: 'blade',
    scorpion: 'arrrow',
    subzero: 'ice',
    shao_kang: 'fire'

});

delete lockDown.shao_kang; //will fail due to object been sealed and does not allow removal.
console.log(lockDown);

lockDown.jax = 'iron fist'; // will fail due to object been sealed and does not all addition.
console.log(lockDown);

lockDown.liu_kang = 'kungFu style'; // will be successful cus sealed object allows modification 
console.log(lockDown);

// 4: create 5 objects and use the spread operator to merge all tge 5 objects to an object called merge
const fig1 = {a: 1, b: 2};
const fig2 = {c: 3, d: 4};
const fig3 = {e: 5, f: 6};
const fig4 = {g: 7, h: 8};
const fig5 = {i: 9, j: 10};

// Merge objects using the spread operator
const merge = { ...fig1, ...fig2, ...fig3, ...fig4, ...fog5};

console.log(merge);
// Output: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 }




// const readMe =  {
//     color: `red`,
//     size: `small`,
//     shape: `round`,
//     weight: `light`,
//     texture: `smooth`,
// }

/*
const readMeZero = Object.freeze(
    {
        color: `red`,
        size: `small`,
        shape: `round`,
        weight: `light`,
        texture: `smooth`,
    }
)

// readMeZero.length = `long`
// readMeZero.color = `blue`
// delete readMeZero.texture

// console.table(readMeZero)

// for ( const keys in readMeZero) {
//     console.log(`${keys} : ${readMeZero[keys]}`);
// }


const turkey = Object.seal(
    {
        name: `Turkey`,
        capital: `Ankara`,
        language: `Turkish`,
        population: `84,000,000`,
        continent: `Europe`,
        currency: `Turkish Lira`,
        timezone: `UTC+3`,
        area: `783,562 km²`,
        callingCode: `+90`,
        isIndependent: true,
        isLandlocked: false,
        isUNMember: true,
    }
)


// turkey.inAfrica = false
// turkey.isIndependent = false
// delete turkey.isLandlocked
turkey.capital = `Adamawa`

// console.table(turkey)


const userOne = {
    id: 1,
    userName: `alexOnTop`,
    email: `alexontopof@gmail.com`,
    password: `123456`,
    createdAt: `2023-01-01`,
};

const userOneupdated = {
    ...userOne,
    updatedAt: `2025-01-13`,
    bio: `I am just doing what i love doing`,
    isVerified: true,
    isOnline: true,
    isBlocked: false,
    isBanned: false,
}

// (three dots) ...ObjectName is the syntax of an object spread operator
const userUpdatedMain = {...userOne, ...userOneupdated}
// const userUpadtedMainOne = Object.assign(userOne, userOneupdated)

console.log(userOneupdated)
// console.table(userUpadtedMainOne)

const ary = [1, 2, 3, 4, 5, 6]
const aryTwo = [...ary, 7, 8, 9, 10, 11, 12]

// const spreadAry = [...ary, ...aryTwo]

// console.log(aryTwo)
*/







