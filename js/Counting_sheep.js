// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means presents)
// Example: [true, true, true, true, true, true, false, false, true] => 7
// Don’t forget to check for bad values like null / undefined

function countSheep(array)
{

    // First Solution using for loop
    // if(array == null || array.length == 0) return 0;
    // let count = 0;
    // for(let i=0; i<array.length; i++)
    // {
    //     if(array[i] == true)
    //     {
    //         count++;
    //     }
    // }
    // return count;

    // Second Solution using filter and length
    if(array == null || array.length == 0) return 0;
    return array.filter((x)=>x==true).length;
}

console.log(countSheep([true, true, true, true, true, true, false, false, true]));
