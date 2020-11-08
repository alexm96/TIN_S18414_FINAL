const Student=require('./models/student')
const express = require('express')
const bodyparser=require('body-parser')
const path = require('path');
const app = express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
const port =3000
const savedUsers=[]

app.get("/hello",(req,res)=>{
    res.send("Hello world")
})

app.get("/form",(req,res)=>{
    res.sendFile((path.join(__dirname+'/form.html')))
})

app.post("/formdata",(req,res)=>{
    console.log(req.body)
    
    const newStudent=new Student(req.body.fName,req.body.lName,req.body.sNumber)
    console.log(newStudent)
    savedUsers.push(newStudent);
    console.log(savedUsers);
    res.redirect("/formdata")
})

app.get("/formdata",(req,res)=>{
   res.render('../templates/formdata.ejs',{
       studentList:savedUsers
   })
})

app.listen(port,()=>{
    console.log(`App listening succesfully on ${port}`)
})