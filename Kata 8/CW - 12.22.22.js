// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0..

function find_average(array) {
    if(array.length >= 1){
        // if the array length is greater or equal to 1 then run reduce function
     let add = array.reduce(
       (acc, curr) => acc + curr, 0)
    return(add/array.length)
     }else{
       return 0
     }
   }