// Given a random non-negative number, you have to return the digits of this number within an array in reverse order
// Example: 348597 => [7, 9, 5, 8, 4, 3]

function convertNumberToReversedArray(number)
{
    // First Solution using split and reverse
    return number.toString().split("").map((x)=>Number(x)).reverse();

    // Second Solution using Array and map
    // return Array.from(String(number), Number).reverse();
    

    // Third Solution using for loop
    // let arr = [];
    // for(let i=number; i>0; i=i/10)
    // {
    //     arr.push(i%10);
    // }
    // return arr;
}

console.log(convertNumberToReversedArray(348597));
