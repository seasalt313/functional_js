function init() {
  console.log("loaded");
}

let ages = [12, 11, 2, 5];

function map(data, func){
  for (let i = 0; i < data.length; i++) {
    data[i] = func(data[i]);
  }
  return data;
}

function filter(array, func){
  for (var i = 0; i < array.length; i++) {
    if (func(array[i]) === true) {
      console.log("true");
      return true;
    } else {
      let index = array.indexOf(array[i]);
      array.splice(index, 1);
      console.log("remove from array");
      console.log(array);
      return false;
    }
  }
}


function doMath(func) {
  return 2 * func;
}

function greaterThan(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i]);
    }  }

}

// console.log(map(ages, doMath));
// console.log(filter(ages, greaterThan));


function addFive(n) {
   return n + 5;
}

function square(n) {
  return n * n;
}

function greaterThanEleven(n) {
   return n > 11;
}

console.log(map([7, 1, 5, 2], addFive));                  // [12, 6, 10, 7]
console.log(map([6, 3, 15, 4], addFive));                 // [11, 8, 20, 9]
console.log(map([6, 3, 15, 4], square));                  // [36, 9, 225, 16]
console.log(filter([7, 21, 45, 102], greaterThanEleven)); // [21, 45, 102]
console.log(map([7, 21, 45, 102], greaterThanEleven));    // [false, true, true, true]






// let shoes = [20,30,50,70];
//
// function discount(price){
//    return price;
// }
//
//
// function map(data, func) {
//
//    for(let i = 0; i < data.length; i++){
//     data[i] = func(data[i]);
//    }
//    return data;
//
// }
//
// console.log(map(shoes, discount(shoes)));
//

// console.log(map(shoes, discount));
//
//
//
//
//
//
//
//
//
//
//
//
//
// window.addEventListener("load", init)
