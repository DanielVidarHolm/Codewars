// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let addNum = 0
    let subNum = 0
    x.forEach( num => {
      if(typeof num === "number"){
        addNum += num
      }
      else if(typeof num === "string"){
        subNum += Number(num)
      }
    })
    return addNum - subNum
  }