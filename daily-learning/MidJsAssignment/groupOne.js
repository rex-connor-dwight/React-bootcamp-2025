//JavaScript Basics & Arrays

// Question One: Explain the difference between let, const, and var with examples.
{
// 1. var
// Scope: var is function-scoped, meaning it is only accessible within the function it is declared in. If declared outside a function, it becomes globally scoped.
// Hoisting: var declarations are hoisted to the top of their scope, meaning they are moved to the top during the compilation phase. However, only the declaration is hoisted, not the initialization.
// Reassignment: You can reassign and redeclare var variables.


// Example:
    function example() {
        if (true) {
        var x = 10;
        }
        console.log(x); // 10, because var is function-scoped
    }
    example();
  
  
  // 2. let
  // Scope: let is block-scoped, meaning it is only accessible within the block (e.g., inside {}) it is declared in.
  // Hoisting: let declarations are hoisted, but they are not initialized. Accessing them before declaration results in a ReferenceError.
  // Reassignment: You can reassign let variables, but you cannot redeclare them within the same scope.
  
  
  // Example:
  if (true) {
    let y = 20;
    console.log(y); // 20, because let is block-scoped
  }
//   console.log(y); // ReferenceError: y is not defined
  
  
  // 3. const
  // Scope: const is also block-scoped, like let.
  // Hoisting: const declarations are hoisted but not initialized. Accessing them before declaration results in a ReferenceError.
  // Reassignment: You cannot reassign or redeclare const variables. However, if the const variable holds an object or array, its properties or elements can be modified.
  
  
  // Example:
  const z = 30;
  // z = 40; // TypeError: Assignment to constant variable
  
  const obj = { name: "Alice" };
  obj.name = "Bob"; // Allowed, because the object itself is not reassigned
  console.log(obj.name); // "Bob"
  
  
  const inConclusion = `
  - 'let' is a block-scoped declaration keyword that allows reassignment but not redeclaration within the same scope. \n
  - 'const' is also block-scoped but does not allow reassignment or redeclaration. However, the properties of objects or arrays declared with 'const' can be modified. \n
  - 'var' is function-scoped, allows reassignment and redeclaration, and is hoisted to the top of its scope.
  `;
  
}

// 2.What are primitive data types in JavaScript? List them with examples.
{
    // In JavaScript, primitive data types are the most basic types of data that are not objects and have no methods. They are immutable, meaning their values cannot be changed directly. There are 7 primitive data types in JavaScript

    // 1. string
    const myString = "Hello, World!";
    console.log(`String: ${myString}`);

    // 2. number
    const myNumber = 42;
    console.log(`Number: ${myNumber}`);

    // 3. boolean
    const myBoolean = true;
    console.log(`Boolean: ${myBoolean}`);

    // 4. undefined
    let myUndefined;
    console.log(`Undefined: ${myUndefined}`);

    // 5. null
    const myNull = null;
    console.log(`Null: ${myNull}`);

    // 6. bigint
    const myBigInt = 9007199254740991n; // Note the 'n' at the end
    console.log(`BigInt: ${myBigInt}`);

    // 7. symbol
    const mySymbol = Symbol("unique");
    console.log(`Symbol: ${mySymbol.toString()}`); // Symbols need to be converted to strings for display

    // string: Represents textual data.
    // number: Represents both integer and floating-point numbers.
    // boolean: Represents a logical value (true or false).
    // undefined: Represents a variable that has been declared but not assigned a value.
    // null: Represents an intentional absence of any object value.
    // bigint: Represents integers larger than what the number type can handle.
    // symbol: Represents a unique and immutable value, often used as object property keys.
}

// 3.Explain the difference between .map() and .forEach() methods.











{
  for( let p = 1; p <= 6; p++){
    // console.log(p)
  }

  // const arrayman = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  // for( const arrayNum of arrayman){
  //   console.log(arrayNum)
  // }

  const numbers = [];
  for (let i = 1; i <= 20; i++){
      numbers.push(i);
  }

  console.log(numbers);

  for (num of numbers){
      // console.log(num);
  }
}