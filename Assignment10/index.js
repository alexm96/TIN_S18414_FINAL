const express = require('express')
const bodyParser = require('body-parser')
const tempRoute=require("./routes/tempRoute")
const distRoute=require("./routes/distanceRoute")
const r=express.Router()
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

const port = 3000
app.use("/temp",tempRoute)
app.use("/distance",distRoute)
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})