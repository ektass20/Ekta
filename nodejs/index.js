const express = require("express");//to import express//
const app = express(); //to call express instance//
const route = require("./route")

app.use("/css",express.static(__dirname+"/public/css")); //tells express to serve static files and items from public folder//

//Middleware to parse form data(important!)
app.use(express.urlencoded({extended: true }));
app.use(express.json()); //nedded if we are sending json


//set view engine//
app.set("view engine", "ejs");

app.use("/",route); //the route file//

//start the server//
const port = 3000;

app.listen(port,()=>{
    console.log(`click here: http://localhost:${port}`);
})