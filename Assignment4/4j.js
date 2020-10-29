binSearch=(arrayOfItems,itemToFind)=>{
    let left=0
    let right=arrayOfItems.length-1
    
    while(left<=right)
    {
        let middle=Math.floor((left + right)/2); 
       
        if(arrayOfItems[middle]===itemToFind){
            return middle
        }
        else if(arrayOfItems[middle]<itemToFind){
            left=middle+1
        }
        else if(arrayOfItems[middle]>itemToFind){
            right=middle-1
        }
    }
}
console.log(undefined === binSearch([1,2,3,4,5,6],7))