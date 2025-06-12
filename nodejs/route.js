const express= require("express");
const route = express.Router();
const connection=require ("./mysql_connect");

route.get("/",(req,res)=>{
    res.render("home.ejs")
});

route.get("/about",(req,res)=>{
    res.render("about.ejs");
});

route.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});

route.get("/student",(req,res) => {
    res.render("student.ejs",{ result: null});
})

route.post("/student", (req,res)=>{
    const {name, roll, branch} = req.body;
    const query = 'insert into students(name, roll_no, branch) VALUES (?, ?, ?)';
    connection.query(query, [name,roll,branch], (err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.render("student", {result:"data added successfully"})
        }
    })
})

route.get("/displayStudent",(req,res)=>{
    const query="SELECT * FROM students";
    connection.query(query,(err,record)=>{
        if(err){
            res.send(err)
        }
        else{
            res.render("displayStudent",{data: record});
        }
    })
})

module.exports = route;  //this is to export the file for routing//