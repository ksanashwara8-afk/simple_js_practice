const sketch = require("./functions");

console.log(`Simple interest : ${sketch.simpleInterest(1000, 5, 2)}`);

console.log(`Compound interest : ${sketch.compoundInterest(1000, 10, 2)}`);

console.log("Even numbers (upto 10):");
sketch.evenNumbers(10);

console.log(`Binary number of 10 : ${sketch.decToBinary(10)}`);

console.log(`Factorial of 5 : ${sketch.factorial(5)}`);

console.log(`6th Fibonacci Term : ${sketch.nthFibonacciTerm(6)}`);

console.log("Fibonacci series (7):");
sketch.fibonacciSeries(7);