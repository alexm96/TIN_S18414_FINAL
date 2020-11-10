const Student=require('./models/student')
const express = require('express')
const bodyparser=require('body-parser')
const path = require('path');
const { nextTick } = require('process');
const app = express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
const port =3000
const savedUsers=[]


app.get("/hello",(req,res)=>{
    res.send("Hello world")
})
const formControl=(req,res)=>{
    
    const successVal=req.query.success    
    res.render((path.join(__dirname+'/templates/form.ejs')),{success:successVal})
}



app.post("/formdata",(req,res)=>{
    const newStudent=new Student(req.body.fName,req.body.lName,req.body.sNumber)
    savedUsers.push(newStudent);
    
    res.redirect("/form?success=true")
    
})

app.get("/formdata",(req,res)=>{
   res.render('../templates/formdata.ejs',{
       studentList:savedUsers
   })
})
app.get("/form",formControl)
app.listen(port,()=>{
    console.log(`App listening succesfully on ${port}`)
})