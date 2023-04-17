function isPrime(n) {
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return n;
}

function generatePrimes(primes) {
  let primeArr = [];
  for (let j = 2; j < primes; j++) if (isPrime(j)) primeArr.push(j);
  return primeArr;
}

console.log(isPrime(4));
console.log(generatePrimes(100));
