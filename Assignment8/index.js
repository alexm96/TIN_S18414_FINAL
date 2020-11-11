const Student=require('./models/student')
const express = require('express')
const bodyparser=require('body-parser')
const path = require('path');

const app = express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json());
const port =3000
const savedUsersForm=[]
const savedUsersJson=[]


app.get("/hello",(req,res)=>{
    res.send("Hello world")
})
const formControl=(req,res)=>{
    
    const successVal=req.query.success    
    res.render((path.join(__dirname+'/templates/form.ejs')),{success:successVal})
}



app.post("/formdata",(req,res)=>{
    const newStudent=new Student(req.body.fName,req.body.lName,req.body.sNumber)
    savedUsersForm.push(newStudent);
    res.redirect("/form?success=true")
    
})
app.post("/jsondata",(req,res)=>{
    const newStudent=new Student(req.body.fName,req.body.lName,req.body.sNumber)
    savedUsersJson.push(newStudent);
    
    res.send(`Success, view at http://localhost:${port}/jsondata`)  
})

app.get("/formdata",(req,res)=>{
   res.render('../templates/formdata.ejs',{
       studentList:savedUsersForm
   })
})
app.get("/jsondata",(req,res)=>{
    res.render('../templates/jsondata.ejs',{
        studentList:savedUsersJson
    })
 })
app.get("/form",formControl)
app.listen(port,()=>{
    console.log(`App listening succesfully on ${port}`)
})