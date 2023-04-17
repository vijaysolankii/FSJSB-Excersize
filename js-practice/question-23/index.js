// Write a program to check that the number given by the user is a prime number or not

function checkPrime(number) {
  let flag = true;

  for (let i = 0; i < number - 1; i++) {
    if (number % 2 == 0) {
      flag = false;
      break;
    }
  }
  flag == true
    ? console.log(number, " is prime")
    : console.log(number, " isn't prime");
}

// console.log(checkPrime(3));
// console.log(checkPrime(12));
// console.log(checkPrime(7));
// console.log(checkPrime(98));
// console.log(checkPrime(97));

// Optimal Solution

function checkNotPrime(number) {
  for (let j = 3; j < Math.sqrt(number); j += 2) {
    if (number % j === 0) {
      return true;
    }
  }
  return false
}

function findPrimeNumber(number){
    if(number % 2 == 0){
        console.log(number,"entered number is not prime : ")
    } else if(checkNotPrime(number)){
        console.log(number,"entered number is not prime : ")
    } else {
        console.log(number,"entered number is prime : ")
    }
}
console.log(findPrimeNumber(3));
console.log(findPrimeNumber(12));
console.log(findPrimeNumber(7));
console.log(findPrimeNumber(98));
console.log(findPrimeNumber(97));