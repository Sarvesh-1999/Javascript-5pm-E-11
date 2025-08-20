// // // // // console.log("External JS");

// // // // // ! TOKEN : smallest unit of any programming lang
// // // // // 1) keywords: predefined word which has some specific meaning

// // // // // 2) identifier: name given to a class, variables , fucntions etc

// // // // // 3) literals/ values : data stored in a variable

// // // // // 4) operators: used to perform operation between two operands

// // // // //! TYPES OF PRINTING STATEMENTS

// // // // // document.write("HelloWorld")

// // // // document.writeln("HelloWorld")

// // // // console.log("Hello JS");

// // // // // ! VARIABLES:

// // // // //! var:

// // // // var a // declaration
// // // // a = 10 // initialization

// // // // console.log(a);// 10

// // // // var a // re-declaration
// // // // a = 20 // re-initailization

// // // // console.log(a); // 20

// // // // var b = 30 // declare and initialize at same time
// // // // console.log(b); // 30

// // // // var b = 40 // re-declare and re-initialize at same time

// // // // //! let
// // // // let c // declaration

// // // // c = 100 // initialization

// // // // console.log(c); // 100

// // // // // let c //!Cannot redeclare

// // // // c = 200 // re-initialization

// // // // console.log(c);// 200

// // // // let d = 300 // declare and initialize
// // // // console.log(d); // 300

// // // // //let d = 400 //! NOT POSSIBLE

// // // // //! const:
// // // // // only declare and initailize at the same time
// // // // const e = 1000
// // // // console.log(e);

// // // //! DATATYPES

// // // //! PRIMITIVE - 7 TYPES
// // // // number -> 10 , 10.468
// // // let a1 = 10.6767
// // // console.log(a1);
// // // console.log(typeof a1);

// // // // string
// // // let a2 = 'Javascript'
// // // console.log(a2);
// // // console.log(typeof a2);

// // // // boolean
// // // let a3 = true
// // // console.log(a3);
// // // console.log(typeof a3);

// // // // undefined
// // // let a4  = undefined
// // // console.log(a4);
// // // console.log(typeof a4);

// // // // null
// // // let a5 = null
// // // console.log(a5);// null
// // // console.log(typeof a5);

// // // // bigInt
// // // let a6 = 99999999999999999999999999n
// // // console.log(a6);
// // // console.log(typeof a6);

// // // // symbol
// // // let s1 = Symbol("js")
// // // let s2 = Symbol("@")
// // // console.log(s1);
// // // console.log(s2);
// // // console.log(s1 == s2);

// // // //! NON-PRIMITIVE - 3 TYPES
// // // // arrays
// // // // objects
// // // // functions

// // // //! PRIMITIVE (IMMUTABLE) AND NON-PRIMITIVE (MUTABLE)
// // // let str = "java"
// // // //         0123
// // // str[0] = "X"
// // // console.log(str);

// // // let arr = [10,20,30]
// // // //          0 1  2
// // // arr[0] = 90
// // // console.log(arr);

// // //!-------------------------------------------------

// // //! HOISTING : moving declaration part at the top of the native code
// // // var a = ud
// // // let b -> value unavailable
// // // const c -> value unavailable

// // // console.log(a);// ud <- due to hoisting
// // // // console.log(b);// ! ERROR

// // // var a = 900
// // // let b = 300
// // // const c = 500
// // // console.log(a);// 900

// // // debugger;
// // // console.log("Start");
// // // console.log(a);
// // // console.log(b);
// // // var a;
// // // a = 90;
// // // console.log(a);
// // // var b = 80;
// // // console.log(a, b);
// // // a = 700
// // // console.log("End");

// // //! TEMPORAL DEAD ZONE (TDZ) : time period between accessing a variable before declaration. it occurs with let and const variables

// // // debugger;
// // // console.log("Start");
// // // // console.log(a);// ! cannot access becoz of TDZ
// // // let a = 10
// // // console.log(a);

// // //! THREE WAYS OF CREATING VARIABLES
// // // 1) var
// // // 2) let
// // // 3) const

// // //! TWO TYPES OF VARIABLES :
// // // 1) GLOBAL VARIABLES : access anywhere within code
// // // 2) LOCAL VARIABLES : have limited access / can be accessed with an block

// // //! FOUR  TYPES OF SCOPES
// // // 1) GLOBAL SCOPE
// // // 2) SCRIPT SCOPE
// // // 3) BLOCK SCOPE
// // // 4) LOCAL SCOPE

// // //! global variables
// // // debugger;
// // // var a1 = 10 // global scope & global variable
// // // let a2 = 20 // script scope & global variable
// // // const a3 = 30 // script scope & global variable

// // //! local variables

// // //! inside conditional or looping statement
// // // debugger
// // // if(true){
// // //     var b1 = 100 // global variable & global scope
// // //     let b2 = 200 // local variable & block scope
// // //     const b3 = 300 // local variable & block scope
// // // }

// // //! inside functions
// // // debugger;
// // // function demo(){
// // //     var c1 = 1000 // local variable & local scope
// // //     let c2 = 2000 // local variable & local scope
// // //     const c3 = 3000 // local variable & local scope
// // // }
// // // demo()

// // //! FUNCTIONS

// // // function declaration
// // function CSKTeam() {
// //   console.log("CSK");
// //   console.log("DHONI");
// //   console.log("JADDU");
// //   console.log("RITURAJ");
// // }
// // // CSKTeam() // function call / function invokation

// // function RCBTeam() {
// //   console.log("RCB");
// //   console.log("VIRAT");
// //   console.log("SALT");
// //   console.log("RAJAT");
// // }
// // // RCBTeam()

// // //! 1) NAMED FUNCTION : function which has name
// // // we can call named function before declaration due to function hoisting.
// // //todo -> NOTE: function hoisting only occur in named func

// // greet(); // due to function hoisting
// // function greet() {
// //   console.log("Welcome");
// // }

// // //! 2) ANONYMOUS FUNCTION : function without name

// // // function (){
// // //     console.log("I am Anonymous");
// // // }

// // //! 3) FUNCTION EXPRESSION

// // var a1 = function () {
// //   console.log("I am Anonymous called using function expression");
// // };
// // console.log(a1);
// // a1();

// // //! 4) PARAMETRIZED FUNCTION
// // // here, n1 and n2 are parameters.
// // // parameters are containers used to store arguements

// // function sum(n1 = 0, n2 = 0) {
// //   let res = n1 + n2;
// //   console.log(res);
// // }
// // sum(10, 20); // arguements
// // sum(50);

// // //! 5) FIRST-CLASS FUNCTION
// // var d = function demo() {
// //   console.log("I am Demo");
// // };
// // d();

// // //! 6) RETURN-TYPE FUNCTION
// // function getEmail(firstName, lastName) {
// //   let email = firstName + "." + lastName + "@gmail.com";
// //   return email
// // }

// // function printDetails(firstName, lastName) {
// //   let data = getEmail(firstName, lastName);
// //   return data
// // }
// // let returnVal = printDetails("John", "Doe");
// // console.log(returnVal);

// //!---------------- GEC WITH FUNCTIONS
// // !--------------- Example 1
// // debugger;
// // console.log("Start");
// // console.log(a);
// // var a;
// // greet();
// // console.log(b);
// // function greet() {
// //   console.log("Welcome");
// // }
// // console.log(greet);
// // a = 80;
// // var b = 90;
// // console.log("End");

// //! --------------EXAMPLE 2
// // console.log(a);
// // var a = 10;
// // console.log(demo);
// // var b = 70;
// // console.log(a, b);
// // function demo() {
// //   var x = 100;
// //   let y = 800;
// //   console.log(x, y);
// // }
// // console.log(demo());
// // console.log(b, a);

// //! ----------------EXAMPLE 3
// // console.log("Start");
// // console.log(student);
// // var a = 10
// // console.log(a);
// // var student = function(){
// //   console.log("I am Student Func");
// // }
// // console.log(student);
// // const b = 900
// // console.log(a,b);
// // student()

// //! ---------EXAMPLE 4

// // console.log("Start");
// // console.log(fun());
// // var a;
// // console.log(test);
// // function fun() {
// //   let x = 10;
// //   let y = 20;
// //   let sum = x + y;
// //   return sum;
// // }
// // var test = function(){
// //   console.log("I am test");
// // }
// // console.log(fun());
// // console.log(test());
// // console.log("End");

// //! --------- Example 5
// // debugger;
// // function subject(sub1, sub2, sub3) {
// //   console.log(sub1, sub2, sub3);
// // }

// // subject("HTML", "CSS", "JS");

// //! 7) NESTED FUNCTION
// // debugger;
// // function parent() {
// //   let money = 50000;
// //   console.log(money);

// //   function child() {
// //     let savings = 2000;
// //     console.log(savings);
// //   }
// //   child();
// // }
// // parent();

// // debugger;
// // function parent() {
// //   let money = 50000;
// //   let str = "Hello";
// //   console.log(money, str);

// //   function child() {
// //     let savings = 2000;
// //     console.log(savings + money);
// //   }
// //   child();
// // }
// // parent();

// //! CLOSURE: it's  temporary memory which is created whenever we access parent's function properties inside child func and gets destroyed when child's execution is completed

// //! LEXICAL SCOPING: ability of js engine to search a variable outside of it's current scope

// // function parent() {
// //   let money = 50000;
// //   console.log(money);

// //   function child() {
// //     let savings = 2000;
// //     console.log(savings + money);
// //   }

// //   return child;
// //   iuytredsdfghjk
// // }
// // let returnVal = parent();
// // console.log(returnVal);
// // returnVal();

// //!----------------Example
// // function parent() {
// //   let a1 = 20;
// //   console.log(a1);

// //   function child1() {
// //     let a2 = 30;
// //     console.log(a2);

// //     function child2() {
// //       let a3 = 40;
// //       console.log(a1 + a2 + a3);
// //     }
// //     child2();
// //   }
// //   child1();
// // }
// // parent()

// //! 8) Higher Order Function  && Callback Function
// // HOF : function which accepts another function as an arguement

// // CALLBACK : funtion which passes as an arguement to another function

// // map(), forEach()

// // function demo(x) {}

// // demo(function abc() {});

// //! example
// // debugger
// // function sum(x, y) {
// //   return x + y;
// // }

// // function calculate(n1, n2, callback) {
// //   let val = callback(n1, n2);
// //   console.log(val);
// // }

// // calculate(10, 20, sum);

// //! 9) IMMEDIATLY INVOKED FUNCTION EXPRESSION (IIFE)

// // (function () {
// //   console.log("IIFE 1");
// // })();

// // (function () {
// //   console.log("IIFE 2");
// // })();

// // debugger;
// // function parent() {
// //   console.log("Hii");

// //   function xyz() {
// //     console.log("xyz func");
// //   }

// //   function child() {
// //     console.log("Byee");
// //     return xyz;
// //   }

// //   return child;
// // }
// // parent()()(); // js currying

// //! 10) ARROW FUNCTION

// // SYNTAX --->   let a1 = () => {}

// // // 1 WAY
// // let a1 = () => {
// //   console.log("Arrow func 1");
// // }
// // a1()

// // // 2 WAY
// // let a2 = _ => {
// //   console.log("Arrow func 2");
// // }
// // a2()

// // // 3 WAY
// // let a3 = () => console.log("Arrow func 3");

// // // 4 WAY
// // let a4 = n1 => console.log(n1)
// // a4("Arrow func 4")

// // // 5 WAY
// // let a5 = (n1,n2) => console.log(n1,n2)
// // a5(10,20)

// // // EXPLICIT RETURN ---> {} and "return" keyword is manadatory
// // let a6 = () => {return "Arrow func 6"}
// // console.log(a6());

// // // IMPLICIT RETURN
// // let a7 = () => "Arrow Func 7"
// // console.log(a7());

// //! ARRAYS

// //! 1) ARRAY LITERALS <- short hand syntax
// // let arr1 = [10,20,30,40]

// //! 2) ARRAY CONSTRUCTOR
// // let arr2 = new Array(10,20,30,40)

// // console.log(arr1);// [10,20,30,40]
// // console.log(arr2);// [10,20,30,40]

// // let arr1 = [10,20,30,40,50]
// // //           0  1  2  3  4

// // console.log(arr1[4]);//50

// //! ARRAY METHODS (INBULIT)

// // let arr1 = [10, 20, 30, 40];
// // console.log(arr1);

// // //! pop() = removes last element and returns it
// // let returnVal1 = arr1.pop();

// // console.log(returnVal1); // 40 <-- popped element
// // console.log(arr1); // [10,20,30]

// // //! push() = adds new element at the end and returns new length
// // let returnVal2 = arr1.push(100, 200, 300);

// // console.log(returnVal2); // 6 <-- new length
// // console.log(arr1); // [10,20,30,100,200,300]

// // //! shift() = removes element from 0th index and returns it
// // let returnVal3 = arr1.shift();

// // console.log(returnVal3); // 10 <-- 0th index element removed
// // console.log(arr1); //[20,30,100,200,300]

// // //! unshift() = adds new element at the front of an array and returns new length
// // let returnVal4 = arr1.unshift("Hii", "Byee");

// // console.log(returnVal4); // 7 <-- new length
// // console.log(arr1); // ["Hii","Byee",20,30,100,200,300]

// // //! splice(startIndex, deleteCount, newElements)

// // let arr2 = [100, 200, 300, 400, 500];
// // //           0   1   2   3   4
// // console.log(arr2);
// // console.log(arr2.splice(1, 3)); //[200,300,400]
// // console.log(arr2);

// // let arr3 = [10, 20, 30, 40];
// // arr3.splice(2, 0, "Hii");
// // console.log(arr3); // [10,20,"Hii",30,40]

// // let arr4 = [100, 200, 300, 10, 20, 30];
// // arr4.splice(1, 4, ["Javascript"]);
// // console.log(arr4); // [100 , ["Javascript"] , 30]

// // let arr5 = [10, 20];
// // arr5.splice(1, 5, "Hey");
// // console.log(arr5);

// // let arr6 = [10, 20, 30, 40, 50, 60];
// // let slicedArr = arr6.slice(2);
// // console.log(slicedArr); // [30,40,50,60]
// // console.log(arr6); // [10,20,30,40,50,60]

// //! indexOf()
// // let arr7 = [10, 20, 30, 40, 50];
// // console.log(arr7.indexOf(50)); // 4
// // console.log(arr7.indexOf(100)); // -1

// // //! includes()
// // console.log(arr7.includes(40)); // true
// // console.log(arr7.includes(400)); // false

// // //! concat()
// // let arr8 = [100, 200, 300];
// // let arr9 = [1000, 2000, 3000];
// // console.log(arr8.concat(arr9, arr8)); // [100,200,300,1000,2000,3000,100,200,300]

// //! loops

// // let arr10 = [105,205,305,405]

// // for(initialization ; condition ; incrementation){}

// // for(let i = 0 ; i < arr10.length ; i++){
// //     console.log(arr10[i]);
// // }

// //! ----> ADVANCED ARRAY METHODS

// // let arr11 = [10, 20, 30, 40, 50];

// // //! forEach()
// // let val1 = arr11.forEach((ele, idx, array) => {
// //   console.log(ele, idx, array, "forEach");
// //   return ele + 5;
// // });
// // console.log("Return Value of forEach ", val1);

// // //! map() -> returns a new array
// // let val2 = arr11.map((ele, idx, array) => {
// //   console.log(ele, idx, array, "map");
// //   return ele + 5;
// // });
// // console.log("Return Value of map ", val2);

// // //! filter()
// // let val3 = arr11.filter((ele) => {
// //   return ele > 20;
// // });
// // console.log("Filtered elements ", val3); // [30,40,50]

// // //! find()
// // let val4 = arr11.find((ele) => {
// //   console.log(ele);
// //   return ele > 20;
// // });
// // console.log("Element Found ", val4); // 30

// // //! findIndex()
// // let val5 = arr11.findIndex((ele) => {
// //   console.log(ele);
// //   return ele > 20;
// // });
// // console.log("Element's Index ", val5); // 2

// //! reduce()

// // let sum = 0;
// // for (let i = 0; i < arr11.length; i++) {
// //   sum += arr11[i];
// // }
// // console.log("Sum is ", sum);

// // let val6 = arr11.reduce((accVal, ele, idx, array) => {
// //   console.log(accVal, ele);
// //   return accVal + ele;
// // }, 0);
// // console.log("Sum is using reduce ", val6);

// // let arr12 = [10, 20, 30];
// // let val7 = arr12.reduce((acc, ele) => acc + ele, 0);
// // console.log(val7);

// //! OBJECTS
// //! object literals
// // let user = {
// //   id: 1,
// //   firstname: "John",
// // };
// // console.log(user); // {id: 1, firstname: "John"}

// //! object constructor
// // let obj2 = new Object({ id: 2, firstname: "Clark" });

// // console.log(obj2); // { id: 2, firstname: "Clark" }

// //! CRUD WITH OBJECTS

// //------> create
// let employee = {
//   id: 1,
//   ename: "John Doe",
// };
// console.log(employee);

// //--------> read
// console.log(employee.ename); // dot operator
// console.log(employee["ename"]); // square brackets

// ["id", "ename", "sal"].forEach((ele) => {
//   console.log(employee[ele]);
// });

// //-----> adding new property
// employee.company = "J-Spiders";
// employee.salary = 50000;
// employee.demo = "demo data";

// //-----> update exsisting property
// employee.salary = 80000;

// //! NOTE : if property doesn't exsist then new property will be added and if it exists that key will get updated

// //------> delete property
// delete employee.demo;

// console.log(employee);

// //! HOW TO ITERATE AN ARRAY USING FOR-IN AND FOR-OF

// let arr13 = [10, 20, 30];
// // for in
// for (let i in arr13) {
//   console.log(i); //---> prints indexs
// }

// // for of
// for (let i of arr13) {
//   console.log(i); // ---> prints elements
// }

// //! HOW TO ITERATE AN OBJECT (ONLY ONE WAY USING FOR-IN LOOP)
// let obj = {
//   id: 2,
//   firstname: "John",
//   lastname: "Doe",
//   company: "HCL",
//   salary: 65000,
//   designation: "Dev",
// };
// for (let i in obj) {
//   console.log(i, " --> ", obj[i]);
// }

// //! HOW TO CREATE YOUR OWN METHODS
// //! NOTE -> don't use arrow function for creating methods bcoz, in arrow function "this" keyword points to window object(global).
// Always use traditional function for creating methods bcoz, in that "this" keyword points to current object

// let student = {
//   id: 123,
//   firstname: "Raj",
//   lastname: "Sharma",
//   getEmail: function () {
//     console.log(this.firstname + "." + this.lastname + "@gmail.com");
//   },
//   getFullname() {},
// };

// student.getEmail();

//! METHODS
// console.log(window); // global object
// console.log(this); // global object

//! "this" keyword always points to window object, if we create a method using arrow func "this" will point window object but if we use traditional func "this" will point current object
// const Employee1 = {
//   id: 1,
//   firstName: "Alex",
//   lastName: "Doe",
//   getFullname: function () {
//     console.log(this); // Employee1 {} <--- current object
//   },
//   demo: () => {
//     console.log(this); // Window {} //! DON'T ARROW FUNC USE TO CREATE METHODS
//   },
// };
// Employee1.getFullname();

//! EXAMPLE 1 : storing function inside object
// function getFullname(){
//   console.log(this.firstName+" ",this.lastName);
// }

// const Student1 = {
//   id: 2,
//   firstName: "John",
//   lastName: "Kent",
//   getFullname
// };

// const Student2 = {
//   id: 3,
//   firstName: "Raj",
//   lastName: "Singh",
//   getFullname
// };

// Student1.getFullname()
// Student2.getFullname()

//! EXAMPLE 2 :
// function getFullname() {
//   console.log(this);
// }

// function getCourseDetails(degree, branch, yop) {
//   console.log(this.firstName, this.lastName, degree, branch, yop);
// }

// const Student1 = {
//   id: 2,
//   firstName: "John",
//   lastName: "Kent",
// };

// const Student2 = {
//   id: 3,
//   firstName: "Raj",
//   lastName: "Singh",
// };

//! call(), apply() and bind()

//!--> call(): Executes func immediately, args given as seperately
// getFullname.call(Student1)
// getFullname.call(Student2)
// getCourseDetails.call(Student1, "Btech", "CSE", 2025)

//!--> apply(): Executes func immediately, args given as array
// getFullname.apply(Student2)
// getCourseDetails.apply(Student2 , ["Btech", "CSE", 2025])

//! bind() : returns a new bounded Func, you can call later
// const boundedGetFullName = getFullname.bind(Student1)

// console.log("Hello");
// var a = 10
// console.log(a);
// boundedGetFullName()

//! METHODS REVISION
//--- NOTE : "this" keyword always points to window object

// console.log(window); // window (GLOBAL OBJECT)
// console.log(this); // window object

// let arr = [this];
// console.log(arr[0]); // window object

// function demo() {
//   console.log(this); // window object
// }
// demo();

// let obj1 = {
//   x: this,
// };
// console.log(obj1.x); // window object

// function getFullname() {
//   console.log(this.first_name, this.last_name);
// }

// function getCourseDetails(sub1, sub2, sub3) {
//   console.log(
//     this.first_name + " " + this.last_name + " " + "has opted for ",
//     sub1,
//     sub2,
//     sub3
//   );
// }

// function getEmail() {
//   console.log(this.first_name + "." + this.last_name + "@gmail.com");
// }

// let Student = {
//   id: 1,
//   first_name: "John",
//   last_name: "Doe",
// };

// let Employee = {
//   id: 1,
//   first_name: "Alex",
//   last_name: "Costa",
// };

// //! call() ,apply() and bind()

// //! ----> call()
// getFullname.call(Student);
// getCourseDetails.call(Student, "HTML", "CSS", "JS");

// //! ---> apply()
// getFullname.apply(Employee);
// getCourseDetails.apply(Employee, ["NODE", "EXPRESS", "MONGO"]);

// //! ---> bind()
// let boundedFunc = getEmail.bind(Student, []);
// let a = 10;
// console.log(a);
// console.log("Hii");
// boundedFunc();

//! constructor function

// let obj1 = new Object()

// function Student(id, fname, lname) {
//   this.id = id;
//   this.firstName = fname;
//   this.lastName = lname;
// }

// let s1 = new Student(1, "Raj", "Singh");
// console.log(s1);

// //! OBJECT METHODS
// // Object.keys()
// console.log(Object.keys(s1));// ["id","firstName","lastName"]

// // Object.values()
// console.log(Object.values(s1));//  [1, 'Raj', 'Singh']

// // Object.entries()
// let val = Object.entries(s1);
// console.log(val); // [ ["id",1] , ["firstName","Raj"] , ["lastName","Singh"] ]

// // Object.fromEntries()
// let convertedObj = Object.fromEntries(val)
// console.log(convertedObj);// {id: 1, firstName: 'Raj', lastName: 'Singh'}

// let str1  = "Javascript" // Double quote
// let str2 = 'Developer' // Single quote

// // backticks ``
// // advantages -> 1) Multi-line string 2) string interpolation ${}
// let str3 = `Hello John ,
// your designation is ${str1} ${str2}`

// console.log(str1);
// console.log(str2);
// console.log(str3);

// const API_URL = "https://jsonplaceholder.typicode.com/users"

// let x = fetch(API_URL)
// console.log(x);

//! CREATING A PROMISE
// const users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
// ];
// const errorMessage = {
//   message: "API CRASHED",
//   success: false,
// };

// let p1 = new Promise((resolve, reject) => {
//   if (false) {
//     resolve(users);
//   } else {
//     reject(errorMessage);
//   }
// });

// console.log(p1);

// p1.then((response) => {
//   console.log(response);// [{},{},...]

//   response.forEach((user)=>{
//    document.writeln(`
//     <div>
//     <h1>Username : ${user.name}</h1>
//     </div>
//     `)
//   })

// })

// p1.catch((error)=>{
// document.writeln(`<h1>${error.message}</h1>`)
// })

//! setInterval() and setTimeout()

// setInterval(callbackFunc , intervalTime)

// let intervalID = setInterval(()=>{
//   console.log("I am setInterval");
// } , 2000)

// setTimeout(()=>{
//   console.log("I am setTimeout");
//   clearInterval(intervalID) // stops interval
// } , 8000)

//! LOCAL STORAGE AND SESSION STORAGE

//! to store data
// localStorage.setItem("email","demo@gmail.com")

//! to get data
// let val = localStorage.getItem("email")
// console.log(val);

// sessionStorage.setItem("password","demo123")

// let password = sessionStorage.getItem("password")
// console.log(password);

// function storeUserData(fname, lname) {
//   let user = {
//     fname,
//     lname,
//   };
//   setTimeout(() => {
//     localStorage.setItem("userdata", JSON.stringify(user));// JSON.stringify() converts JS to JSON
//     console.log("Data stored");
//   }, 5000);
// }

// console.log("Function called");
// storeUserData("John", "Doe");

// setTimeout(()=>{
//   let data = localStorage.getItem("userdata")
//   let parsedData = JSON.parse(data) // JSON.parse() converts JSON to JS
//   console.log(parsedData);
//   document.writeln(`<h1>${parsedData.fname} ${parsedData.lname}</h1>`)
// }, 10000)

//! API CALL USING FETCH METHOD

// let p1 = fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(p1);

// p1.then((res) => {
//   let p2 = res.json();

//   p2.then((todos) => {
//     console.log(todos);
//   });

//   p2.catch((err) => {
//     console.log(err);
//   });
// });

// p1.catch((err) => {
//   console.log(err);
//   console.log("API CALL FAILED");
// });

// //! USING METHOD CHAINING APPROACH
// fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{

//   res.json().then((posts)=>{
//     console.log(posts);

//   }).catch((err)=>{
//     console.log(err);
//   })

// }).catch((err)=>{
//   console.log(err);
// })

//! async await

async function getUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    console.log(users);//[{},{},.....]
    displayUsers(users);//[{},{},.....]
  } catch (error) {
    console.log(error);
  }
}


function displayUsers(allUsers) {
  console.log(allUsers);//[{},{},.....]

  allUsers.map((ele)=>{
    console.log(ele);
    document.writeln(`
       <div style='background-color:gainsboro; padding:10px;margin:10px'>
        <h3> Name : ${ele.name} </h3>
        <h3> Email : ${ele.email}</h3>
        <h3> PhoneNo : ${ele.phone}</h3>
       </div>
      `)
  })

}
