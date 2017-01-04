// 02 | divisors
//
// Write a function called divisors that accepts a number and returns an array of all of the numbers that divide evenly into it.

function divisors(number) {
    let array = [];
    let item = range(0, 100);

    let eachNumber =
        item.filter(function(n) {
          if (number%n === 0) {
            console.log("Working: " + n);
            array.push(n);
            return true;
          }
        })
        console.log(array);
}


function range(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}


console.log(divisors(20));
