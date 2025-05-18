// write function which repeats the given string exactly n times

function repeatString(number, str)
{
    // let newString = "";
    // for(let i=0; i<number; i++)
    // {
    //     newString += str;
    // }

    // return newString;

    return str.repeat(number)
}

console.log(repeatString(6,"kottp"));