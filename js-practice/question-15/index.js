// Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

let a = 20,
  b = 80,
  c = 90,
  d = 100;

function checkCredit(num) {
  if (num >= 80 && num <= 100) {
    console.log(`A level credit`);
  } else if (num >= 70 && num <= 89) {
    console.log(`B level credit`);
  } else if (num >= 60 && num <= 69) {
    console.log(`C level credit`);
  } else if (num >= 50 && num <= 59) {
    console.log(`D level credit`);
  } else if (num >= 0 && num <= 49) {
    console.log(`F level credit`);
  } else {
    console.log("please enter valid number");
  }
}

console.log(checkCredit(20));
console.log(checkCredit(80));
console.log(checkCredit(90));
console.log(checkCredit(100));
