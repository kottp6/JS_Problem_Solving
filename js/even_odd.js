// create function that takes an integer as an argument and return "Even" or "Odd"

function evenOdd(number)
{
    // First Solution using if else statement
    // if(number%2==0)
    // {
    //     return "Even"
    // }
    // else{
    //     return "Odd"
    // }

    // Second Solution using ternary operator
    return number%2 == 0 ? "Even" : "Odd";
}

console.log(evenOdd(10));