// Imagine that you have an array of 3 integers each representing a different person. Each number can be 0, 1, or 2 which represents the number of hands that person holds up.

// Now imagine there is a sequence which follows these rules:

// None of the people have their arms raised at first
// Firstly, a person raises 1 hand; then they raise the second hand; after that they put both hands down - these steps form a cycle
// Person #1 performs these steps all the time, person #2 advances only after person #1 puts their hands down, and person #3 advances only after person #2 puts their hands down
// The first 10 steps of the sequence represented as a table are:

// Step   P1   P2   P3
// --------------------
//  0     0    0    0
//  1     1    0    0
//  2     2    0    0
//  3     0    1    0
//  4     1    1    0
//  5     2    1    0
//  6     0    2    0
//  7     1    2    0
//  8     2    2    0
//  9     0    0    1
// Given a number, return an array with the number of hands raised by each person at that step.

function getPositions(s){
    // This is basicly like binary, but instead a 2 based system [1,1,1,0] = 14, its a 3 based system [1,1,2,0] = 42
    //                                                           [8,4,2,0] = 14                       [27,9,6,0] = 42
    // the people have gone a whole circle after 27 iterations / at 27 the table is [0,0,0]
    let fixNum = s % 27
  
    // the p3 is 9 / modulus of 27
    let p3 = (fixNum === 0) ? 0 : Math.floor(fixNum / 9)
    
    // Setting rest division is transfered to the next person
    fixNum = fixNum % 9
    
    // p2 is how many times it divides 3 with the rest, if the rest is 7 the it goes 2 times to it
    let p2 = Math.floor(fixNum / 3)
    
    // its enough to find the modulus 3 of the rest, if the rest is 7 modulus of 3 is 1
    let p1 = fixNum % 3
  
    return [p1,p2,p3]
    
  }

  const getPositions = s => {
    return [(s % 3), Math.floor(s/3) % 3, Math.floor(s/9) % 3];
  }

