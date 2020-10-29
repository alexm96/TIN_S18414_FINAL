longestString=(stringToSort)=>{
   return  stringToSort.split(" ").reduce((word1,word2)=>word1.length<word2.length?word2:word1, "");
}
console.log(longestString("quick brown"))