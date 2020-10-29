recursiveFibonacci=(numberToCalc)=>{
    if(numberToCalc==0){
        return 0;
    }
    else if(numberToCalc==1) {
return 1;
    }
    return recursiveFibonacci(numberToCalc-1)+recursiveFibonacci(numberToCalc-2)
}
console.log(recursiveFibonacci(10))