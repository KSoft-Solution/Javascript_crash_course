// let x = 1
// console.log(x)
// x++
// console.log(x)
// ++x
// console.log(x)
// console.log(x)
// x--
// console.log(x)
// --x
// console.log(x)
// for(var x = 1; x<=5; x++){
//     console.log(x)
// }
// for(let x = 1; x<=5; x++){
//     console.log(x)
// }
// for(const x = 1; x<=5; x++){
//     console.log(x)
// }

// ++
let arr = [];
console.log(arr)
for(let x = 1; x<=10; x++){
  if(x==5) break;
  // if (x<5) continue;
    arr.push(x)
}
console.log(arr)

// for(let x = 1; x<=10; x++){
//     // if(x==5) break;
//     if(x<5) continue;
//     arr.push(x)
// }
// console.log(arr)

// setTimeout(function () {
//     console.log('ghusuri ghua khauchi')
// }, 1000);

// var i = 0
// let i = 0
// setInterval(function () {
//     console.log(`mankada g** ranga heichi ${i++}`)
// }, 1000);

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log({ i, j });
//   }
// }

/** while loop */
// let arr1 = []
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i += 1;
//   if(i===3){
//     // break;
//     continue;
//   }
//   arr1.push(i)
// }
// console.log(arr1)

// let i = 1,
//   j = 1;

//  while(i<=5){
//     i+=1
//     console.log({i})
//     while(j<5){
//         j+=1
//         console.log({j})
//     }
//     console.log({i,j})
//  }

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// program to display numbers
let i = 1;
const n = 5;

// do...while loop from 1 to 5
do {
  console.log(i);
  i++;
} while (i <= n);
