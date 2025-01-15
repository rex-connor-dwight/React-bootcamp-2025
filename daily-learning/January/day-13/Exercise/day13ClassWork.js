// Classwork Assignment: Object Manipulation and Iteration in JavaScript

// Objective:

// To understand how to create and manipulate objects in JavaScript, and use loops to iterate over their properties.

// Scenario:

// You are a student in a department that offers 9 courses. Each course has a name and a corresponding grade assigned to it. Your task is to create an object to represent these courses and their grades, and then perform operations on this object.

// Assignment Questions:

// Object Creation:
// Create an object named courses that contains 9 courses offered by your department. Each course should be a property of the object, and the value of each property should be the grade assigned to that course (e.g., A, B, C, etc.).
// Iteration and Display:
// Use a for...in loop to iterate over the courses object and display each course name along with its corresponding grade in the format: Course: [Course Name], Grade: [Grade].
// Grade Analysis:
// Calculate and display the following:
// The total number of courses.
// The number of courses where the grade is A.
// The number of courses where the grade is B or lower.
// Grade Improvement:
// Suppose you want to improve your grades. Write a plan (in words) to update the grades of at least 3 courses in the courses object. Explain which courses you would improve and why.
// Advanced Task (Optional):
// If you were to add a new course to the courses object, how would you do it? Describe the steps and write the code (if you want to attempt it).
// Example Structure of the courses Object:

// Your courses object might look something like this:

// javascript
// Copy
// const courses = {
//   mathematics: "A",
//   physics: "B",
//   chemistry: "C",
//   biology: "A",
//   programming: "B",
//   literature: "A",
//   history: "C",
//   economics: "B",
//   art: "A"
// };
// Instructions:

// Write your answers to the questions in a clear and structured manner.
// Use comments to explain your steps if you write any code.
// Be prepared to discuss your approach and reasoning during the class.
// Learning Outcomes:

// By completing this assignment, you will:

// Understand how to create and manipulate objects in JavaScript.
// Learn how to iterate over object properties using loops.
// Gain experience in analyzing and updating data stored in objects.



const courses = {
  mathematics: "A",
  physics: "B",
  chemistry: "C",
  biology: "A",
  programming: "B",
  literature: "A",
  history: "C",
  economics: "B",
  art: "A"
};

for (const key in courses) {
  console.log(`Course ${key}: Grade ${courses[key]}`);
}

for (const key in courses) {
    if (courses[key] === "A") {
        const totalCourses = Object.key(courses).length;
        console.log(`Total number of courses: ${totalCourses}`);
    } 
  };

const aCourses = Object.keys(courses).filter(key => courses[key] ===`B` || courses[key] === `C`)

// console.log(aCourses.length)

 
 
  const se = `1`;
  const see = 1;

  // // console.log(se - see)

  // if (se == see){
  //   console.log(`Yes`)
  // } else {
  //   console.log(`No`)
  // }

  // type coercion

  // if (se === see){
  //   console.log(`Yes`)
  // } else {
  //   console.log(`No`)
  // }

 
 




let totalCourses = 0;
let gradeACount = 0;
let gradeBlowerCount = 0;

for (const course in courses) {
  totalCourses++; 
  if (courses[course] === "A") {
    gradeACount++;
  } else if (courses[course] === "B" || courses[course] === "C") {
    gradeBlowerCount++;
  }
}

// console.log(`Total number of courses: ${totalCourses}`);
// console.log(`Number of courses with grade A: ${gradeACount}`);
// console.log(`Number of courses with grade B or lower: ${gradeBlowerCount}`);

// console.table(courses)