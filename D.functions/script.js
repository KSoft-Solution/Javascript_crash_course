// const item = document.getElementById("root");
// // item.textContent = 'hello world'
// // console.log({ item });

// //declaration of a function
// // names()
// // names()
// // function names(){
// //     console.log('this is function1')
// // }
// // function names(){
// //     console.log('this is function2')
// // }

// //calling a function
// var fun1 = function () {
//   console.log("calling fn1/");
// };
// let fun2 = function () {
//   console.log("calling fn2/");
// };
// let fun3 = function () {
//   return {};
// };
// console.log(typeof fun3());
// console.log(
//   typeof (function () {
//     return "";
//   })()
// );

// //ES6 es2015(arrow function)
// const fun4 = () => {
//   console.log("arrow function");
// };
// fun4();

//? function with arguments
// "use strict"
// function arg1() {
//   // console.log(typeof arguments)
//   // console.log(typeof arguments.callee)
//   // console.log(typeof arguments.length)
//   // console.log(arguments)
//   // console.log(arguments.callee)
//   // console.log(arguments.length)
//   arguments[5] = 5;
//   console.log(arguments[0])
//   console.log(arguments[1])
//   console.log(arguments[2])
//   console.log(arguments[3])
//   console.log(arguments[4])
//   console.log(arguments[5])
//   console.log(arguments.length)

//   //   for (let i = 0; i <= arguments.length; i++) console.log(arguments[i]);
// }

// arg1("", "a", 2, false);

// function abc(name, age, job, company) {
// //   console.log(name);
// //   console.log(age);
// //   console.log(job);
// //   console.log(company);

//   console.log({ name, age, job, company });
// }

// abc("ashok sahu", 28, "software engineer", "TCS");

// function abc(name, age, job) {
// //   console.log(name);
// //   console.log(age);
// //   console.log(job);
// //   console.log(company);

//   console.log({ name, age, job });
// }

// abc("ashok sahu", 28, "software engineer", "TCS");
// abc("ashok sahu", 28);

// default parameter
function abc(name, age=27, job='soft') {
  //   console.log(name);
  //   console.log(age);
  //   console.log(job);
  //   console.log(company);

  console.log({ name, age, job });
}

abc("ashok sahu", 28, "software engineer", "TCS");
abc("ashok sahu", 28);
abc("ashok sahu");
