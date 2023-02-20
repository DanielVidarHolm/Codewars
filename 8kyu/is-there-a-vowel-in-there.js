// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array..

// Mapping the whole array returning the ascii conversion if its a vowel or returning the same item if not
function isVow(a){
    return a.map(item => (item == 97 || item == 101 || item == 105 || item == 111 || item == 117) ? String.fromCharCode(item) : item)
  }