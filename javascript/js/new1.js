function result(){
    var fname= document.getElementById("aa").value;
    var lname= document.getElementById("bb").value;
    var city=  document.getElementById("cc").value;
    var course= document.getElementById("dd").value;
 
   document.getElementById("pp").innerHTML= fname + " " + lname + " " + city +" "+ course;
 
   document.getElementById("aa").value=""
   document.getElementById("bb").value=""
   document.getElementById("cc").value=""
   document.getElementById("dd").value=""
 }