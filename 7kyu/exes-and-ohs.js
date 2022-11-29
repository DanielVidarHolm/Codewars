// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const counter = {
      'x' : 0,
      'o' : 0
    }
    str.toLowerCase().split('').forEach( item => {
      if (item === 'x'){
        counter['x']++;
      }else if (item === 'o'){
        counter['o']++
      }else return
    })
    return (counter['x'] === counter['o']) ? true : false
      
      
  }
  function XO(str) {
    let a = str.replace(/x/gi,'')
    let b = str.replace(/o/gi,'')
    return !(a.length - b.length)
}