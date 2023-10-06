// index.js
function findNumbersForProduct(targetProduct) {
    for (let num1 = 1; num1 <= targetProduct; num1++) {
        for (let num2 = 1; num2 <= targetProduct; num2++) {
            if (num1 * num2 === targetProduct) {
                return [num1, num2];
            }
        }
    }
    return null; // No such pair found
}

const targetProduct = 62;
const [num1, num2] = findNumbersForProduct(targetProduct);
const multiply = num1 * num2;

function getRandomIntegerGreaterThanZero() {
    return Math.floor(Math.random() * 100) + 1; // Generates a random integer between 1 and 100
}

const random = getRandomIntegerGreaterThanZero()


// mod.js (your implementation)
function calculateMod(num3, num4) {
    return num3 % num4;
}
const num3 = 10;
const num4 = 6;
const mod = calculateMod(num3, num4)

// max.js (your implementation)
function findMaxNumber(numbers) {
    return Math.max(...numbers);
}


const numbers = [10, 5, 20, 15, 8];

const max = findMaxNumber(numbers);





