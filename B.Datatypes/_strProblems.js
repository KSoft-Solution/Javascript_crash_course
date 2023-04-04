/*
!get the unicode values of given string
*/

let str = "ashok";
let elm = document.getElementById('heading_1')

const getTheUnicodeValues = (str) => {
  let unicodeArr = [];
  for (let i = 0; i <= str.length; i++) {
    unicodeArr.push(str.charCodeAt(i));
  }
  return unicodeArr;
};

elm.textContent = JSON.parse(JSON.stringify(getTheUnicodeValues(str)));
