// Creation of array
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

// Creation of variables
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// Cycle for array
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0)
        positiveCount++;

    if (numbers[i] < 0)
        negativeCount++;

    if (numbers[i] === 0)
        zeroCount++;
}

// Show result in console
console.log("Кількість позитивних чисел:", positiveCount);
console.log("Кількість негативних чисел:", negativeCount);
console.log("Кількість нульових чисел:", zeroCount);

