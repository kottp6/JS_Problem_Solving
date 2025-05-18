// you get an array of numbers, return the sum of all of the positive ones

function sumOfPositive(arr)
{
    // First Solution using for loop 
    // let initialValue = 0;
    // for(let i=0; i<arr.length; i++)
    // {
    //     if(arr[i] > 0)
    //     {
    //         initialValue+= arr[i];
    //     }
    // }
    // return initialValue;

    // Second Solution using filter and reduce
    return arr.filter((x)=>x>0).reduce(
        (acc,current)=> acc+current,0
    )
}

console.log(sumOfPositive([1, -4, 7, 12]));