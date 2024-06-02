// program that manages a simple friend list.

// 1. Define an object named people containing an empty array called friends.
const people =  {
    friends : [] as friends []
};

// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.

type friends ={
    firstName:string,
    lastName:string,
    id? : number
};

let friend :friends ={
    firstName :'arooba',
    lastName :'shiekh' ,
    id :  1
};

let friend2 :friends ={
    firstName : 'hooriya',
    lastName :'shiekh' ,
};
let friend3 :friends  ={
    firstName : 'ahmed' ,
    lastName : 'shiekh' ,
    id: 3
};

// 3. Add these friend objects to the friends array within the people object.

people.friends.push (friend,friend2,friend3) ;


// 4. Output the entire people object to the console, displaying your information and your
// friend list.

const  friends  ={ 
    firstName :'zahara',
    lastName :'fatima' ,
    id :3
};

console.log( people);     

//out put//  
//friends:[
//       { firstName: 'arooba', lastName: 'shiekh', id: 1 },
//       { firstName: 'hooriya', lastName: 'shiekh' },
//       { firstName: 'ahmed', lastName: 'shiekh', id: 3 }
//     ]


// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array  array methods to form the sentence "I am a student of GIAIC".
// Steps:using
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:




// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
const scrambledArray = [ 'student' ,'of' ,true , 123,'am' , 'a' , 'GIAIC','I']
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays)
scrambledArray .splice(2,2);
scrambledArray.pop ();
scrambledArray .unshift ('I');
scrambledArray[1] = 'am' ;
scrambledArray[2] = 'a' ;
scrambledArray[3] = 'student' ;
scrambledArray[4] = 'of';
scrambledArray[5] = 'GIAIC';

//I  am  a  student  of  GIAIC
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

console.log(scrambledArray.join ("  "));

// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
const inventory = []  as Product []
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity
type Product ={
name :string,
model : number,
cost :number,
quantity :number,
};


let product1  :Product= {
    name : 'watch',
    model: 2021,
    cost : 1150,
    quantity: 1,
};
let product2 :Product ={
    name :'dress',
    model :2024,
    cost :4000,
    quantity :2,
};
let product3 :Product ={
    name :'shose',
    model :2023,
    cost :6000,
    quantity :3,
};
// 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push (product1,product2,product3);
console .log (inventory)

//out put 
 //
// //
// [
//     { name: 'watch', model: 2021, cost: 1150, quantity: 1 },
//     { name: 'dress', model: 2024, cost: 4000, quantity: 2 },
//     { name: 'shose', model: 2023, cost: 6000, quantity: 3 } 
// ]

// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
let thiredPropertyQuantity =inventory [2] .quantity
console.log (`quantity of the thired product (shose) : ${thiredPropertyQuantity}`) ; 
 //out put //
//quantity of the thired product (shose) : 3 
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

 let product4 : Product = {
    name : 'tablate' ,
    model :2025 ,
    cost :400000,
    quantity : 1,
 } ;
 inventory.push( product4) ;

console.log (`model of the thired product (shose):${inventory[2].cost}`)
console.log(`this is my first order :${inventory[1].name}`);
console.log (`${inventory[0].model}`);

// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).

interface student  {
    name : string ,
    seniorStatus : boolean ,
    completedAssigment : boolean
};

// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!

const students: student [] = [
    {
        name : 'hina' ,
        seniorStatus : true ,
        completedAssigment : false,

    },

    {
        name : 'Arub' ,
        seniorStatus : true ,
        completedAssigment :true,

    },

    {
        name : 'hamza',
        seniorStatus : false,
        completedAssigment :true,
    },

];

// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?


function findSeniorStudentWithAssigment (students :student []) :student [] {
    return students.filter (student =>student.seniorStatus && student.completedAssigment) ;
};
let seniorstudentWithAssigment = findSeniorStudentWithAssigment(students);

console.log('Senior students with completed Assigment:' , seniorstudentWithAssigment);
function removeIncompleteSeniorStudents(students:student[]) : student[] {
    return students.filter ( student=> !(student.seniorStatus && !student.completedAssigment));
}
let updatedClassList =removeIncompleteSeniorStudents(students)
console.log("updated class list :" ,updatedClassList); 

 //out put
// Senior students with completed Assigment: [ { name: 'Arub', seniorStatus: true, completedAssigment: true } ]   
// updated class list : [
//     { name: 'Arub', seniorStatus: true, completedAssigment: true },
//     { name: 'hamza', seniorStatus: false, completedAssigment: true }
//   ]










