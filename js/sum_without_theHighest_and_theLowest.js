// create function that make sum elements in array without Highest element and lowest element

function sumWithoutHighAndLow(array)
{
    // First Solution using for loop
    // if(array == null) return 0;
    // let sum = 0;
    // for(let i=0; i<array.length; i++)
    // {
    //     sum += array[i];
    // }
    // return sum;



    
    // Second Solution using filter and reduce
    // if(array == null) return 0;
    // let max = Math.max(...array);
    // let min = Math.min(...array);
    // return array.filter((x)=>x!=max && x!=min).reduce((acc,cur)=>acc+cur,0);


    // Third Solution using sort and slice and reduce
    if(array == null) return 0;

    return array.sort((a,b) => a - b).slice(1,-1).reduce((acc,cur) => acc + cur,0);

    
}

console.log(sumWithoutHighAndLow([3,2,10,12,15,1]));