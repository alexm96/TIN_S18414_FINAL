const express = require('express')
const bodyParser = require('body-parser')
const { static } = require('express')


const app = express()

app.use(bodyParser.json())
const port = 3000
const acceptedOperations = { '*': (x, y) => x * y, "+": (x, y) => x + y, "/": (x, y) => x / y, "-": (x, y) => x - y }


app.use(express.static('public'))
app.get("/",(req,res)=>{
  res.sendFile("index.html")
})
app.post('/operation', (req, res) => {
  console.log(req.body)
  if(acceptedOperations[req.body.operation] === undefined){
      const keys=[]
      for ( k in acceptedOperations) keys.push(k)
      res.send("Please format your json better accepted operation are "+ keys.toString())
  }
  else{
  res.send((acceptedOperations[req.body.operation](req.body.number1,req.body.number2).toString()))}
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})