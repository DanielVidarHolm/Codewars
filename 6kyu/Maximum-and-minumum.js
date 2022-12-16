// Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

// Example
// max(1,2,3,4) //returns 4
// max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
// max(1,2,[3,4]) //returns 4
// max(1,2,[3,[4]]) //returns 4
// max(1,2,[3,['4r']]) //returns NaN
// max([[],[-4]]) // returns -4
// max() or max([]) //returns 0
// And so goes for min

// Further Instructions
// functions will take any number of arguments
// Arrays of numbers can be to any depth
// You can't use Math.max, Math.min, and require
// If one of the arguments can not be evaluated to a number, return NaN

function flat(arr) {
    var res = [];
    for (let x of arr) {
        if (Array.isArray(x)) {
            res = res.concat(flat(x))
        } else {
            res.push(x);
        }
    }
    res = res.map(Number);
    return res.some(isNaN)?[NaN]:!res.length?[0]:res.sort((a,b)=>a-b);
}
function max(...args){
   return flat(args).reverse()[0];
}

function min(...args){
   return flat(args)[0];
}