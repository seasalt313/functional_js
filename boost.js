// 03 | boost
//
// Write a function called boost that accepts a number as a parameter and increments all of the digits of the number individually. If the digit is 0-8, it should be incremented, but if its 9 then it should be reset to 0. Return the incremented number.
//

function boost(number) {
    let integer = number.toString().split("");

    parseInt(integer[0]) // gives you 4

    let newNum = integer.map(function(n) {
        return parseInt(n[0]) + 1;
    })

    let joined = newNum.join("");
    console.log(joined);

}

boost(48);
