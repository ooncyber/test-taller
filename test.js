// This is the first array presented
var list = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0]

// This, is the last array, used for example the sum
// var list = [4, 8, 9, 2, 5, 8, 4, 9];


// move all 0's to right
list.sort((firstNumber, secondNumber) =>
    firstNumber == 0 ? 1 : 1
);

// remove 0's from array
list = list.filter(number => number != 0)

// Log if you want to seee the list without 0's
// console.log(`list: `, list)

// transform list to array and increment +1 at the value
let number = parseInt(list.join(''));
number++;

// Log if you want to be the number
// console.log(`number: `, number)

// convert the number value to array again and turn all them into number
list = number.toString().split('').map(e => parseInt(e))

// all even numbers must be they value negative
list = list.map(function (number, index) {
    return index % 2 == 0 ? number * -1 : number;
})

// Log if you want to be the list with negative numbers
// console.log(`list: `, list)

// define max to min value possible to find out what the higher value
var max = Number.MIN_VALUE;
for (let i = 0; i < list.length - 1; i++) {
    // get the actual number
    var numberFirst = list[i];

    // verify if numberFirst is even (transform to positive to make the sum later)
    if (numberFirst < 0)
        numberFirst *= -1;

    // make the sum
    sum = numberFirst + list[i + 1];

    // verify if this sub array have the most sum
    if (sum > max)
        max = sum;
}

console.log(`The highest sum is ${max}`);