// create function that make sum elements in array without Highest element and lowest element

function sumWithoutHighAndLow(array)
{
    // First Solution using sort and slice and reduce
    if(array == null) return 0;

    return array.sort((a,b) => a - b).slice(1,-1).reduce((acc,cur) => acc + cur,0);
}

console.log(sumWithoutHighAndLow([3,2,10,12,15,1]));