// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution1(str, ending){
    const start = str.length - ending.length
    const strEnding = str.slice(start)
    return strEnding === ending
}

function solution2(str, ending){
    return str.endsWith(ending)
}