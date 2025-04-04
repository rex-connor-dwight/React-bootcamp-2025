const ObjectDestructuring = () => {

    const person = { 
        Name: `Muna`, 
        Age: 39, 
        Country: `Nigeria`,
        Address: {
            City: `Lagos`,
            Zip: 908352
        }
    }

    // Basic Object Destructuring

    // const {Name} = person
    // const {Age} = person
    // const {Country} = person
    // const {Name, Age, Country} = person

    // Destructuring with Renaming

    // const {Name: Achalugo} = person
    // const {Age: OldWoman} = person
    // const {Country: PlaceOfBirth} = person

    const {
        Name: Achalugo, 
        Age: OldWoman, 
        Country: PlaceOfBirth
    } = person


    // Default Values in Object Destructuring
    // const {Name, Age, Country, Position = `Developer`, Salary = `$400k`} = person

    // Nested Object Destructuring
    const {Name, Age, Country, Address: {City, Zip}} = person

    // const {City, Zip} = person.Address

    console.log(City, Zip)
}

export default ObjectDestructuring