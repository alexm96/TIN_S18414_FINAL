isPalindrome=(someString)=>{
    if(someString.length==1){
        return true;
    }
    for (let i =0;i<(someString.length)/2;i++){
        if(someString[i]!=someString[someString.length-(i+1)]){
            return false
        }
    }
    return true
}
console.log(isPalindrome("racecar"))