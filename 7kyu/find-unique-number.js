// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

function findUniq(arr) {
    const countingObject = {}
    arr.forEach((item, i) => {
      
      if(!(item in countingObject)){
        countingObject[item] = 1
        
      }else{
        countingObject[item]++
      }
    });
    
    let uniqueNumber
    Object.entries(countingObject).forEach(([key,value]) => {
      if (value === 1){
        uniqueNumber = Number(key)
      }
    });
    return uniqueNumber
  }