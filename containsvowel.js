// Write a function called containsVowel that takes a single string and returns true if there is at least one value or false otherwise.


//
// 1) break the word into letters
// 2) find out which of those letters are vowels
// 3) if one or more are, return true

function isVowel(letter){
  let vowels = ["a", "e", "i", "o", "u"];

  if (["a", "e", "i", "o", "u"].includes(letter)) {
    return true
  } else {
    return false
  }
}

function containsvowel(string){
  let vowels = ["a", "e", "i", "o", "u"];
  let letters = string.split("");

  return letters.filter(isVowel).length > 0;

}

console.log(containsvowel("hey"));
