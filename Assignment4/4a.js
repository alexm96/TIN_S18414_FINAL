let recursiveFactorial=(numberToCalc)=>{
    if(numberToCalc<1){
        return 1
    }
    return numberToCalc*(recursiveFactorial(numberToCalc-1))
}


function iterativeFactorial(numberToCalc){
    let factorialToReturn=1;
    for(i=numberToCalc;i>0;i--){
        factorialToReturn*=i
    }
    return factorialToReturn
}
console.log(120===recursiveFactorial(5) && 120 ===iterativeFactorial(5))