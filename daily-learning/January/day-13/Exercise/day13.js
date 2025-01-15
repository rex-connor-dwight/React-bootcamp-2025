

// This is the syntax on a javascript object

// const objectName = {
//     key1: value1,
//     key2: value2,
//     key3: value3,
//   };

  
  const student = {
    name: "Jane Doe",
    age: 80,
    subjects: ["Math", "Physics", "Chemistry"],
    isGraduated: false,
    gender: "Male",
    man: true,
  };

{
    // The syntax for accessing an object property in JS is: dot notaion, the syntax for the dot notation is 
// objectName.ObjectKey

// console.log(student.subjects)

//   const subjects = ["Math", "Physics", "Chemistry"];

// const adam = `gender`;

// console.log(student[adam]);

}

student.grade = "A+";
// delete student.isGraduated;


// for...in is is type of Loop in JS
for (const key in student){
    console.log(`${key}: ${student[key]}`)
}

// const owen = `name`;
// const nadar = `Austion`;
// const tgh = owen + " " + nadar;

// console.log(tgh);


// console.log(student);



















//   const key = `age`;
//   const sex =   `gender`

//   student.grade = "A+";
//   student.age = 23;

//   delete student.isGraduated;

{        // The syntax for adding a property to an object is:
        // objectName.propertyName = propertyValue;

        // The syntax for deleting a property from an object is:
        // delete objectName.propertyName;
}

// for (const uniqueId in student) {
//     console.log(`${uniqueId}: ${student[uniqueId]}`);
//   }
        
        // The syntax for a for...in loop is:

        // for (const key in object) {
          // code to be executed for each property
        // }
        // key in this stands for a virable name

// console.log(student); 




  