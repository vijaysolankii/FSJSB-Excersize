// Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output

let y = 5;
let x = 5;
let str = "";
console.log("========================================================================");

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i >= j) {
      str = str.concat("*");
    }
  }

  str = str.concat("\n");
}

console.log(str);

console.log("========================================================================");

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    str = str.concat("*");
  }

  str = str.concat("\n");
}

console.log(str);

console.log("========================================================================");

for (let i = 0; i <= 5; i++) {
  for (let j = 0; j < 5 - i; j++) {
    str = str.concat(" ");
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    str = str.concat("*");
  }
  str = str.concat("\n");
}
console.log(str);
console.log("========================================================================");
