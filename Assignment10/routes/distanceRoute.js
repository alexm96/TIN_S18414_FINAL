const express = require('express')
const doCalc=require("../utils/calc")
const router=express.Router()


router.post("/",(req,res)=>{
  const requestedItem=req.body
  
  const result={"result":doCalc(requestedItem)}
  res.send(result)
})


module.exports=router