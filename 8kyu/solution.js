// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    const square = numbers.map(x => x * x);
    const sum = square.reduce ((pv,cv)=>{
           return pv + cv },0)
    return sum
     
  }