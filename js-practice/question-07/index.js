// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let skills = ["inueron", "pw", "udemy", "unacdamy", "pw"];

function firstElement(f_arr, item) {
  return f_arr.indexOf(item);
}
function lastElement(l_arr, item) {
  return l_arr.lastIndexOf(item);
}

let myArr = [
  "unacadmy",
  "pw skills",
  "inueron",
  "upgrade",
  "scaler",
  "gfg",
  "pw skills",
];
console.log(myArr.lastIndexOf("pw skills"), myArr.indexOf("pw skills"));
let clist = new Array();

for (let i = 0; i < myArr.length; i++) {
  clist.push(myArr[i]);
}

let findName = "pw skills";

console.log(firstElement(clist, findName));
console.log(lastElement(clist, findName));
