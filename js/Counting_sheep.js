// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means presents)
// Example: [true, true, true, true, true, true, false, false, true] => 7
// Don’t forget to check for bad values like null / undefined

function countSheep(array)
{
    return array.filter((x)=>x==true).length;
}

console.log(countSheep([true, true, true, true, true, true, false, false, true]));
