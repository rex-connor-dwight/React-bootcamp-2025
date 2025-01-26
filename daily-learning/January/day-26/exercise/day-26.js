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
console.log(assignBothBojects);



