/**
 * Write a function in Node.js that takes an array of integers
 * as input and returns the sum of all the numbers
 */

function sumOfArrayElements(elements){
    if(!elements || !elements.length || typeof elements !== "object"){
        return "Parameter should be of type array and must have atleast one integer element in it."
    }
    let sum = 0;
    for(let element of elements){
        if(typeof element === "number"){
            sum += element;
        }
    }
    return sum;
}

console.log(sumOfArrayElements(["string",2,4]));