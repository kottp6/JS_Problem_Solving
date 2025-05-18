// write function which repeats the given string exactly n times

function repeatString(number, str)
{
    // First Solution using for loop
    // let newString = "";
    // for(let i=0; i<number; i++)
    // {
    //     newString += str;
    // }

    // return newString;

    // Second Solution using repeat
    return str.repeat(number)

    // Third Solution using Array and join
    // return Array(number).fill(str).join("")

    
}

console.log(repeatString(6,"kottp"));