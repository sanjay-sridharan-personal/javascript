"use strict";

function restApiHandler() {
    let sum = 0;
    for (let value = 1; value <= 100; value++) {
        sum += value;
    }

    return sum;
}

console.log(`Sanjay! The sum of 1 to 100 is ${restApiHandler()}.`);
