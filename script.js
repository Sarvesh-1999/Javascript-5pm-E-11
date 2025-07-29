// // // // console.log("External JS");

// // // // ! TOKEN : smallest unit of any programming lang
// // // // 1) keywords: predefined word which has some specific meaning

// // // // 2) identifier: name given to a class, variables , fucntions etc

// // // // 3) literals/ values : data stored in a variable

// // // // 4) operators: used to perform operation between two operands

// // // //! TYPES OF PRINTING STATEMENTS

// // // // document.write("HelloWorld")

// // // document.writeln("HelloWorld")

// // // console.log("Hello JS");

// // // // ! VARIABLES:

// // // //! var:

// // // var a // declaration
// // // a = 10 // initialization

// // // console.log(a);// 10

// // // var a // re-declaration
// // // a = 20 // re-initailization

// // // console.log(a); // 20

// // // var b = 30 // declare and initialize at same time
// // // console.log(b); // 30

// // // var b = 40 // re-declare and re-initialize at same time

// // // //! let
// // // let c // declaration

// // // c = 100 // initialization

// // // console.log(c); // 100

// // // // let c //!Cannot redeclare

// // // c = 200 // re-initialization

// // // console.log(c);// 200

// // // let d = 300 // declare and initialize
// // // console.log(d); // 300

// // // //let d = 400 //! NOT POSSIBLE

// // // //! const:
// // // // only declare and initailize at the same time
// // // const e = 1000
// // // console.log(e);

// // //! DATATYPES

// // //! PRIMITIVE - 7 TYPES
// // // number -> 10 , 10.468
// // let a1 = 10.6767
// // console.log(a1);
// // console.log(typeof a1);

// // // string
// // let a2 = 'Javascript'
// // console.log(a2);
// // console.log(typeof a2);

// // // boolean
// // let a3 = true
// // console.log(a3);
// // console.log(typeof a3);

// // // undefined
// // let a4  = undefined
// // console.log(a4);
// // console.log(typeof a4);

// // // null
// // let a5 = null
// // console.log(a5);// null
// // console.log(typeof a5);

// // // bigInt
// // let a6 = 99999999999999999999999999n
// // console.log(a6);
// // console.log(typeof a6);

// // // symbol
// // let s1 = Symbol("js")
// // let s2 = Symbol("@")
// // console.log(s1);
// // console.log(s2);
// // console.log(s1 == s2);

// // //! NON-PRIMITIVE - 3 TYPES
// // // arrays
// // // objects
// // // functions

// // //! PRIMITIVE (IMMUTABLE) AND NON-PRIMITIVE (MUTABLE)
// // let str = "java"
// // //         0123
// // str[0] = "X"
// // console.log(str);

// // let arr = [10,20,30]
// // //          0 1  2
// // arr[0] = 90
// // console.log(arr);

// //!-------------------------------------------------

// //! HOISTING : moving declaration part at the top of the native code
// // var a = ud
// // let b -> value unavailable
// // const c -> value unavailable

// // console.log(a);// ud <- due to hoisting
// // // console.log(b);// ! ERROR

// // var a = 900
// // let b = 300
// // const c = 500
// // console.log(a);// 900

// // debugger;
// // console.log("Start");
// // console.log(a);
// // console.log(b);
// // var a;
// // a = 90;
// // console.log(a);
// // var b = 80;
// // console.log(a, b);
// // a = 700
// // console.log("End");

// //! TEMPORAL DEAD ZONE (TDZ) : time period between accessing a variable before declaration. it occurs with let and const variables

// // debugger;
// // console.log("Start");
// // // console.log(a);// ! cannot access becoz of TDZ
// // let a = 10
// // console.log(a);

// //! THREE WAYS OF CREATING VARIABLES
// // 1) var
// // 2) let
// // 3) const

// //! TWO TYPES OF VARIABLES :
// // 1) GLOBAL VARIABLES : access anywhere within code
// // 2) LOCAL VARIABLES : have limited access / can be accessed with an block

// //! FOUR  TYPES OF SCOPES
// // 1) GLOBAL SCOPE
// // 2) SCRIPT SCOPE
// // 3) BLOCK SCOPE
// // 4) LOCAL SCOPE

// //! global variables
// // debugger;
// // var a1 = 10 // global scope & global variable
// // let a2 = 20 // script scope & global variable
// // const a3 = 30 // script scope & global variable

// //! local variables

// //! inside conditional or looping statement
// // debugger
// // if(true){
// //     var b1 = 100 // global variable & global scope
// //     let b2 = 200 // local variable & block scope
// //     const b3 = 300 // local variable & block scope
// // }

// //! inside functions
// // debugger;
// // function demo(){
// //     var c1 = 1000 // local variable & local scope
// //     let c2 = 2000 // local variable & local scope
// //     const c3 = 3000 // local variable & local scope
// // }
// // demo()

// //! FUNCTIONS

// // function declaration
// function CSKTeam() {
//   console.log("CSK");
//   console.log("DHONI");
//   console.log("JADDU");
//   console.log("RITURAJ");
// }
// // CSKTeam() // function call / function invokation

// function RCBTeam() {
//   console.log("RCB");
//   console.log("VIRAT");
//   console.log("SALT");
//   console.log("RAJAT");
// }
// // RCBTeam()

// //! 1) NAMED FUNCTION : function which has name
// // we can call named function before declaration due to function hoisting.
// //todo -> NOTE: function hoisting only occur in named func

// greet(); // due to function hoisting
// function greet() {
//   console.log("Welcome");
// }

// //! 2) ANONYMOUS FUNCTION : function without name

// // function (){
// //     console.log("I am Anonymous");
// // }

// //! 3) FUNCTION EXPRESSION

// var a1 = function () {
//   console.log("I am Anonymous called using function expression");
// };
// console.log(a1);
// a1();

// //! 4) PARAMETRIZED FUNCTION
// // here, n1 and n2 are parameters.
// // parameters are containers used to store arguements

// function sum(n1 = 0, n2 = 0) {
//   let res = n1 + n2;
//   console.log(res);
// }
// sum(10, 20); // arguements
// sum(50);

// //! 5) FIRST-CLASS FUNCTION
// var d = function demo() {
//   console.log("I am Demo");
// };
// d();

// //! 6) RETURN-TYPE FUNCTION
// function getEmail(firstName, lastName) {
//   let email = firstName + "." + lastName + "@gmail.com";
//   return email
// }

// function printDetails(firstName, lastName) {
//   let data = getEmail(firstName, lastName);
//   return data
// }
// let returnVal = printDetails("John", "Doe");
// console.log(returnVal);

//!---------------- GEC WITH FUNCTIONS
// !--------------- Example 1
// debugger;
// console.log("Start");
// console.log(a);
// var a;
// greet();
// console.log(b);
// function greet() {
//   console.log("Welcome");
// }
// console.log(greet);
// a = 80;
// var b = 90;
// console.log("End");

//! --------------EXAMPLE 2
// console.log(a);
// var a = 10;
// console.log(demo);
// var b = 70;
// console.log(a, b);
// function demo() {
//   var x = 100;
//   let y = 800;
//   console.log(x, y);
// }
// console.log(demo());
// console.log(b, a);

//! ----------------EXAMPLE 3
// console.log("Start");
// console.log(student);
// var a = 10
// console.log(a);
// var student = function(){
//   console.log("I am Student Func");
// }
// console.log(student);
// const b = 900
// console.log(a,b);
// student()

//! ---------EXAMPLE 4

console.log("Start");
console.log(fun());
var a;
console.log(test);
function fun() {
  let x = 10;
  let y = 20;
  let sum = x + y;
  return sum;
}
var test = function(){
  console.log("I am test");
}
console.log(fun());
console.log(test());
console.log("End");