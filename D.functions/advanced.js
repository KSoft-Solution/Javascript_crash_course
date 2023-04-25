// //callback function
// function n1(name) {
//   let d = 5;
//   function n2(name) {
//     return name * 2;
//   }
//   console.log(n2(name) + d);
// }

// n1(10);

// function outer(name) {
//   if (typeof name === "string") {
//     return "its a string";
//   } else if (typeof name === "boolean") {
//     return "its a boolean";
//   }
//   else if (typeof name === "number") {
//     return "its a number";
//   }
//   else {
//     return "provide a valid datatype";
//   }
// }

// outer();
// console.log(outer(function () {}));
// console.log(outer("ashok sahu"));
// console.log(outer(true));
// console.log(outer(1));
// console.log(typeof outer())

// function multiSt(name, age) {
//   // return {name,age}
//   return [name, age];
// }

// console.log(multiSt("ashok shau", 28));

// function fn1(age){
//     return age*2
// }

// function fn2(age2){
//     return age2*2
// }

// console.log(fn2(fn1(28)))

// function callback(){
//     console.log('callback function is calling..')
// }

// setTimeout(callback,2000)

// let elm = document.getElementById('iii')
// elm.addEventListener('click',function(){
//     alert('calling function.')
// })

let arr = [1, 2, 3, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

const [n1, n2, n3, n4] = arr; //array destructuring
const [a, ...b] = arr; //spread operator
console.log({ n1, n2, n3, n4 });
console.log({ a, b });

// callback function
// const arg = (x) => {
//   return x + 3;
// };

// const arrow = (fn) => {
//   return fn*4
// };

// console.log(arrow(arg()));
// console.log(arrow(2));

//curry function
function fn(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(fn(10)(2)(3));
