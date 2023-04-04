const heading = document.getElementById("heading_1");

let myname = "kanha sahu",
  age = 28,
  job = "software engineering";

// let name = 'ashok sahu'
// let age = 28;
// console.log({ myname, age ,job});
console.log(`i am ${myname} and currently working on ${job}`); //template literal

// let name1 = "i am single quote string";
// let name2 = "i am dual quote string";
// let name3 = `i am backtik string`;

// let name1 = 'i a'm single qoute string';

// let name1 = "i a'm single qoute string";

// let name1 = "i a'm single qoute string";

// let name1 = "i a"m single qoute string";

// let bc = `i am a sting "i am " `;

// let a = "a";
// let b = "b";
// let c = a + b; //string co ncatination

let a = 1,b='b',c='1'

// heading.textContent = typeof c//string
// heading.textContent = typeof Number(c)//number
// heading.textContent = typeof parseFloat(c)//number
// heading.textContent = typeof parseInt(c)//number
// heading.textContent = typeof +c//number

// heading.textContent = a+b;
// heading.textContent = a+c;
// heading.textContent = a+ +c; //one of interview question
// heading.textContent = a+Number(c);
// heading.textContent = a+parseInt(c);
// heading.textContent = a+parseFloat(c);

//properties of string
let str = 'lorem ipsum bande materam';
// heading.textContent = str.length //25
// heading.textContent = str.charAt()//1
// heading.textContent = str.charAt(0)//l
// heading.textContent = str.charAt(1)//o
// heading.textContent = str.charCodeAt()//108
// heading.textContent = str.charCodeAt(22)//114
// heading.textContent = str.charCodeAt(-22)//108


// let unicodeArr = []
// for (let i = 0 ; i<=str.length;i++){
//   unicodeArr.push(str.charCodeAt(i))
// }
// heading.textContent = JSON.parse(JSON.stringify(unicodeArr))

heading.textContent = str.codePointAt(110) ?? 'undefined'
// heading.textContent = undefined ?? 'undefined'
// heading.textContent = null ?? 'undefined'
// heading.textContent = '' ?? 'undefined'


