function simpleInterest(amount, rate, time) {
    return (amount * rate * time) / 100;
}

function compoundInterest(amount, rate, time) {
    return (amount * ((1 + rate / 100) ** time) - amount);
}

function evenNumbers(limit) {
    if (limit >= 0) {
        evenNumbers(limit - 1);
        if (limit % 2 === 0) console.log(limit);
    }
}

function decToBinary(decNumber) {
    if (decNumber === 0) {
        return "";
    }
    return (decToBinary(Math.floor(decNumber / 2)) + decNumber % 2);
}

function factorial(number) {
    if (number === 0) return 1;
    return factorial(number - 1) * number;
}

function nthFibonacciTerm(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return (nthFibonacciTerm(n - 1) + nthFibonacciTerm(n - 2));

}

function fibonacciSeries(limit) {
    if (limit > 0) {
        fibonacciSeries(limit - 1);
        console.log(nthFibonacciTerm(limit - 1));
    }
}

module.exports = {
    simpleInterest,
    compoundInterest,
    evenNumbers,
    decToBinary,
    factorial,
    nthFibonacciTerm,
    fibonacciSeries,
};