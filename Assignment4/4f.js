primeCheck=(numberToCheck)=>{
    for (i=2;i<Math.sqrt(numberToCheck);i++){
        if(numberToCheck%i==0){
            return false
        }
    }
    return true
}
console.log(primeCheck(10))