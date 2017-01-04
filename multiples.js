// 04 | multiples
//
// Write a function called multiples that accepts two numbers and returns an array of all numbers from 1 - 100 that are evenly divisible by both.

function multiples(first, second){
  // 1. start with an array 1 - 100(Range)
  // 2. Keep things divisble by first and second, discard the rest(filter)

  let numbers = range(1, 100);
  let divvies = numbers.filter(function(n){
    if (n % first === 0) {
      if (n % second === 0) {
        return true;
      }
    }
    else {
      return false;
    }

  })
  console.log(divvies);
  return divvies;

}

function range(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}



console.log(multiples(5, 10));
