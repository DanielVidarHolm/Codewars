// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    const arr = a.filter(num => { 
      if (!b.includes(num)){
        // Return a string of num. becouse if the num is 0 
        // it will return false instead of the number 0
        return String(num)
      }
    })
    return arr
  }

  function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }