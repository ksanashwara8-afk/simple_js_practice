function simpleInterest(amount, rate, time) {
    return (amount * rate * time) / 100;
}

function compoundInterest(amount, rate, time) {
    return (amount * ((1 + rate / 100) ** time) - amount);
}

function evenNumbers(limit) {
    if (limit <= 0) {
        return;
    }
    evenNumbers(limit - 1);
    if (limit % 2 == 0) console.log(limit);
}

module.exports = {
    simpleInterest,
    compoundInterest,
    evenNumbers
};