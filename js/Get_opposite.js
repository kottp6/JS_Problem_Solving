// Given an integer or floating-point number, find its opposite.
// Example: 1 => -1
// 14 => -14
// -43 => 43

function getOpposite(number)
{
    if(number==0)
    {
        return 0;
    }
    return -number;
}

console.log(getOpposite(1));
console.log(getOpposite(14));
console.log(getOpposite(-43));
console.log(getOpposite(0));