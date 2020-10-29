secondLargestAndSecondSmallest=(arrayOfNumbers)=>{
    sortedArray=arrayOfNumbers.sort()
    return[sortedArray[1],sortedArray[sortedArray.length-2]] // I know this is inefficient, can be done in linear time
}
console.log(secondLargestAndSecondSmallest([1,2,3,4,5]))