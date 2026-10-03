const sketch = require("./math_functions");

console.log(`\nSimple interest : ${sketch.simpleInterest(1000, 5, 2)}`);

console.log(`\nCompound interest : ${sketch.compoundInterest(1000, 10, 2)}`);

console.log("\nEven numbers (upto 10):");
sketch.evenNumbers(10);

console.log(`\nBinary number of 10 : ${sketch.decToBinary(10)}`);

console.log(`\nFactorial of 5 : ${sketch.factorial(5)}`);

console.log(`\n6th Fibonacci Term : ${sketch.nthFibonacciTerm(6)}`);

console.log("\nFibonacci series (7):");
sketch.fibonacciSeries(7);

console.log(`\n5 is a prime number : ${sketch.isPrime(7)}`);

console.log("\nPrime numbers (upto 10):");
sketch.findAllPrimes(10);

console.log(`\nFIrst prime number above 20 : ${sketch.firstPrimeAbove(20)}`);

console.log(`\nHCF of 12 & 18 : ${sketch.hcf(12, 18)}`);
