moneyToCoins=(amount)=>{
    possibleCoins=[200,100,50,25,10,5,1]
    numberOfCoinsInAmount=[]
    for (i=0;i<possibleCoins.length;i++){
        coinToAdd=possibleCoins[i]
        amountOfCoins=Math.floor(amount/coinToAdd)
        
        for(j=0;j<amountOfCoins;j++){
            numberOfCoinsInAmount.push(coinToAdd)
            amount-=coinToAdd
        }
        
    }
    return numberOfCoinsInAmount
}
console.log(moneyToCoins(5657))