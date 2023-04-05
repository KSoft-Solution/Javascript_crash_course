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

let a = 1,
  b = "b",
  c = "1";

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
// let str = 'lorem ipsum bande materam';
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

// heading.textContent = str.codePointAt(110) ?? 'undefined'
// heading.textContent = undefined ?? 'undefined'
// heading.textContent = null ?? 'undefined'
// heading.textContent = '' ?? 'undefined'

// let name1 = undefined,name2 = 'ashok';
// let name1 = null,name2 = 'ashok';
// let name1 = 'kanha',name2 = 'ashok';
// let name1 = 1,name2 = 'ashok';
// let name1 = 1.2,name2 = 'ashok';
// let name1 = [],name2 = 'ashok';
// let name1 = '',name2 = 'ashok';
// let name1 = {} ,name2 = 'ashok';
// let name1 = function(){} ,name2 = 'ashok';
// heading.textContent = name1 ?? name2

let str = "ashok sahu ";
let str2 = "kanha sahu";
// heading.textContent = str.at(2)//depricated
// heading.textContent = str.charAt(2)
// heading.textContent = str.concat(str2)

// heading.textContent = str2.endsWith('u')//true
// heading.textContent = str2.endsWith('h')//false
// heading.textContent = str2.endsWith('hu')//true
// heading.textContent = str2.endsWith('bu')//true

// heading.textContent = str2.startsWith('k')//true
// heading.textContent = str2.startsWith('a')//false
// heading.textContent = str2.startsWith('ka')//true

// heading.textContent = str2.includes('k')//true
// heading.textContent = str2.includes('a')//true
// heading.textContent = str2.includes('n')//true
// heading.textContent = str2.includes('x')//false

// heading.textContent = str2.indexOf('k')//0
// heading.textContent = str2.indexOf('a')//1
// heading.textContent = str2.indexOf('n')//2
// heading.textContent = str2.indexOf('x')//-1

// heading.textContent = str2.lastIndexOf('a')//7
// heading.textContent = str2.lastIndexOf('h')//7

// heading.textContent = str[0]//a
// heading.textContent = str.at(0)//a
// heading.textContent = str.charAt(0)//a

// heading.textContent = str.match(new RegExp('a'))
// heading.textContent = typeof str.match(new RegExp('a'))
// heading.textContent = typeof str.matchAll(new RegExp('a'))

let str3 = 'ashok' 
let str4 = 'ksah'

// heading.textContent = str.localeCompare(str3)//1
// heading.textContent = str.localeCompare(str4)//-1

// heading.textContent = str3.repeat(1)
// heading.textContent = str3.repeat(2)
// heading.textContent = str3.repeat(4)

// heading.textContent = str.replace('ashok','kanha')
// heading.textContent = str.replace('askok','kanha')

let str5 = 'ASHOK SAHU'
let str6 = 'ashok sahu'

// heading.textContent = str5.toLowerCase();
// heading.textContent = str5.toUpperCase();

// heading.textContent = str5.toLocaleLowerCase();
// heading.textContent = str6.toLocaleUpperCase();

// heading.textContent = str6.substring(0,5);
// heading.textContent = str6.substring(6,11);

// heading.textContent = str6.split()
// heading.textContent = typeof str6.split()
// heading.textContent = str6.split('')
// heading.textContent = str6.split(' ')
// heading.textContent = str6.split(',')
// heading.textContent = str6.split('$')
// heading.textContent = str6.split('a')
// heading.textContent = str6.split('b')

// heading.textContent = 'ashok       sahu'
// heading.textContent = 'ashok       sahu'.length
// heading.textContent = '     ashok sahu'.length
// heading.textContent = '     ashok sahu'.trim().length
// heading.textContent = '     ashok sahu       '.length
// heading.textContent = '     ashok sahu       '.trim().length
// heading.textContent = 'ashok sahu       '.length
// heading.textContent = 'ashok sahu       '.trim().length

// heading.textContent = '          ashok sahu'
// heading.textContent = '             ashok sahu'.length
// heading.textContent = '     ashok sahu'.trimStart()
// heading.textContent = '         ashok sahu'.trimStart().length
// heading.textContent = 'ashok sahu       '.length
// heading.textContent = 'ashok sahu       '.trimStart().length
// heading.textContent = 'ashok sahu       '.length
// heading.textContent = 'ashok sahu       '.trimEnd().length

let num_str = '100.5'
let num_str1 = '100.5xyz'
let str_num = 100.5
// heading.textContent = typeof num_str
// heading.textContent = typeof str_num
// heading.textContent = typeof num_str1

// heading.textContent = typeof toString(str_num)
// heading.textContent = str_num.toString()
// heading.textContent = typeof str_num.toString()

heading.textContent = _.toString(str_num)




