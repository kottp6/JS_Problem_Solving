// Given an integer or floating-point number, find its opposite.
// Example: 1 => -1
// 14 => -14
// -43 => 43

function getOpposite(number)
{
    // First Solution using if else
    // if(number==0)
    // {
    //     return 0;
    // }
    // return -number;

    // Second Solution using ternary operator
    // return number==0 ? 0 : -number;

    // Third Solution using Math.sign
    return number == 0 ? 0 : number * -1 ;
}

console.log(getOpposite(1));
console.log(getOpposite(14));
console.log(getOpposite(-43));
console.log(getOpposite(0));