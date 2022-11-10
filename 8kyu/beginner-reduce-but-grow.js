// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Using the reduce method
function grow1(x){
    return x.reduce( ( acc, cur ) => acc * cur, 1 );
}

// using a basic for loop
function grow2(x){
    let acc = 1
    for (let i = 0; i < x.length; i++) {
      let cur = x[i]
      acc *= cur
    }
    return acc
}

// Using the forEach method
function grow3(x){
    let acc = 1
    x.forEach(item => acc *= item)
    return acc;
}