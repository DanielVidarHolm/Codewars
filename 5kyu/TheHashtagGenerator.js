// Description

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


// Solution

function generateHashtag (str) {
  
    let str_arr = str.split(' ')
   
    // getting rid of all empty spaces
    let no_space_str_arr = str_arr.filter(e => e !== " ")

    let foo = no_space_str_arr.map(e => e.charAt(0).toUpperCase() + e.slice(1))

    let newStr
    
    if (Array.isArray(foo)){
      newStr = foo.join('')
    
    }else{
      newStr = foo.toString()
    }

    if(newStr.length > 139){
      return false
    }else if (newStr.length === 0){
      return false
    }else{
      return '#' + newStr
    }
    
  }