const distances=require("./distance")
const temps=require("./temp")
const calcChange=(someObj)=>{
    console.log(someObj)
    const distancesTemps={...distances.distanceMapping,...temps.tempMapping};
    const from =someObj["from"]
    const to =someObj["to"]
    const toCalc=someObj["toCalc"]
    const calc =distancesTemps[from][to]  || ((x)=>{return x})
    return calc(toCalc) 
}
module.exports=calcChange