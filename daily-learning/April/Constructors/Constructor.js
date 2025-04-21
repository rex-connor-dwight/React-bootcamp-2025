const Constructor = () => {
    // A Constructor is a special type of function used as a blueprint to create multiple objects with the same structure and behavior.

    // Traditionally, if we want to create several objects with identical properties, we might do something like this:
    
    const objectOne = {
        firstKey: `Key 1`,
        secondKey: `Key 2`,
        thridkey: `key 3`
    }

    const objectTwo = {
        firstKey: `Key 1`,
        secondKey: `Key 2`,
        thridkey: `key 3`
    }

    const objectThree = {
        firstKey: `Key 1`,
        secondKey: `Key 2`,
        thridkey: `key 3`
    }

    // While this works, it is not efficient for scaling. Repeating the same object structure over and over becomes tedious and error-prone. To solve this, JavaScript gives us Constructor Functions.

    // A Constructor function allows us to define a template for our object structure. It starts with the `function` keyword, followed by the name of the constructor (usually capitalized by convention), and parameters that act as placeholders for the values we want to assign later.

    // Inside the constructor, we use the `this` keyword to refer to the object that will be created when the constructor is called. Think of `this` as a pointer to the specific object that is being initialized.

    function myConstructor(param1, param2, param3) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    }

    // Let's look at a more practical example:

    function States(capital, population, size) {
        this.capital = capital;
        this.population = population;
        this.size = size;
    }

    const Abuja = new States(`FCT`, 188470337, `5638km`);

    // When we use the `new` keyword with a constructor:
    // 1. A brand new empty object is created.
    // 2. The constructor function runs, and `this` inside it refers to that new object.
    // 3. Properties are assigned to that object.
    // 4. The new object is returned.

    // So in this case, `Abuja` becomes an object with: { capital: 'FCT', population: 188470337, size: '5638km' }

    // Now let’s take things further by adding a method to our constructor.

    function Cloth(brand, size, fabric) {
        this.brand = brand;
        this.size = size;
        this.fabric = fabric;

        // A method is simply a function passed as a property to an object.
        this.getDetails = function() {
            return `I am wearing a ${this.brand} size ${this.size} ${this.fabric} coat`;
        }
    }

    const myCloth = new Cloth(`Fendi`, 12, `polyester`);
    // myCloth.getDetails(); 

    // This demonstrates that we can bundle both data (properties) and behaviors (methods) into the same object using constructors.

    // JavaScript also has built-in constructor functions like: new String(), new Number(), new Boolean(), etc. However, using these built-in constructors for primitives is discouraged. Instead of `new String("Hello")`, prefer just `"Hello"`.

    // With the introduction of ES6 (ECMAScript 2015), JavaScript provided  a new way to write constructor functions using `class` syntax. This is often referred to as "syntactic sugar" — it's a cleaner and more organized way to do what constructor functions already did.

    class objectName {
        constructor(paramX, paramY, paramZ) {
            this.paramX = paramX;
            this.paramY = paramY;
            this.paramZ = paramZ;
        }
    }

    // Using this modern syntax, here’s a practical example:

    class Department {
        constructor(lecturer, students) {
            this.lecturer = lecturer;
            this.students = students;
        }
    }

    const Computer_Science = new Department(`Mr. Akintola`, 304);
    console.table(Computer_Science);

    // In this example, `Computer_Science` becomes an object with lecturer and students as its properties.

    // ✅ Why Constructors Matter in Real Apps:
    // In real-world applications, we often fetch structured data from APIs. Constructor functions (or ES6 classes) make it easier to group that data into reusable templates or models. This leads to cleaner code, better  organization, and easier maintenance.

    // You can also add custom methods inside your class (just like we did with Cloth) to operate on the data fetched or created dynamically.

    // 🔁 Linking to Async Programming:
    // When working with asynchronous code (like API calls), constructors become even more useful. For example, we can fetch data, and then pass that data into a constructor to create structured objects.
    
    // Example (hypothetical):
    // const data = await fetchUserData();
    // const user = new User(data.name, data.age, data.email);
    
    // This helps us manage real-time data with strong object templates,
    // making our async JavaScript more organized and readable.
};

export default Constructor;
