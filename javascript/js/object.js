//objects//

//array store values at indexes like 0=value1 and so on.
// in object we assign properties detail about one student- student


// var student1= {
//     id:1,
//     firstName: "anuj",
//     lastName: "saini",
//     city: "chd",
//     ageYear: 2001,
//     design: "mern",

//     // to get full name together, we create a function//

//     fullName : function(){ return this.firstName + " " + this.lastName}

// };

// document.write(student1.lastName);
// document.write(student1.deisgn);

//to print entire object we use//

// document.write(`Id:  ${student1.id} <br> First Name: ${student1.firstName} <br> Last Name: ${student1.lastName}<br> city: ${student1.city} <br> age: ${student1.ageYear} <br> design: ${student1.design}`)

//to print fullName we will add the function as ${student1.fullName()} like this//

// to add new values to a existing object//
// student1.age=function(){return 2025-student1.ageYear}
// document.write("<br> Age is:" + student1.age() + "<br> <br>")


// <table border="1" cellpadding="5">
//     <tr>Name</tr>

// </table>

// for(var properties in student1){
//     if(typeof student1[properties]=="function"){
//         document.write("<br>" + properties + " : " + student1[properties]());
//     }
//     else{
//         document.write("<br>" + properties + " : " + student1[properties]);
//     }
// }


// var employees = [
//     {name: "ekta", course: "mern", city: "pkl"},
//     {name: "meenakshi", course: "devops", city: "chd"},
//     {name: "ira", course: "python", city: "delhi"}
// ]

// // for(keys in employees){
// document.write(keys+ " : " +employees[keys]+ "<br>");
// }
// document.write ("<br>" + employees[1].city + "<br> <br>")

// for(item of employees){

//      for(keys in item){
//         document.write(keys+ " : " + item[keys]+ "<br>");
//     }
// }

// document.write(Object.keys(workers));

// constructor //

var employees = [
    {fname: "ekta", lname: "saini", course: "mern", city: "pkl"},
    {fname: "meenakshi", lanme: "singh",course: "devops", city: "chd"},
    {fname: "ira", lname: "arora",course: "python", city: "delhi"}
]

function Employees(fname, lname, course, city){
    this.fname=fname;
    this.lname=lname;
    this.course=course;
    this.city=city;

}

let employee1= new Employees("ira","arora", "python", "delhi");
let employee2= new Employees("ekta","saini", "mern", "pkl");
let employee3= new Employees("meenakshi","singh", "devops", "chd");

// document.write("<br>" + employee1.fname);

Employees.prototype.fullName = function(){
    return this.fname + " " + this.lname
}

// document.write(employee1.fullName())

// employees.map((item) => {
//     document.write("<br>" + item.fname + "<br>" + item.lname + "<br>" + item.city+ "<br>" + item.course +  "<br>")

// })

var employees = [
    {fname: "ekta", lname: "saini", course: "mern", city: "pkl"},
    {fname: "meenakshi", lanme: "singh",course: "devops", city: "chd"},
    {fname: "ira", lname: "arora",course: "python", city: "delhi"}
]

function result(){
   var fname= document.getElementById("aa").value;
   var lname= document.getElementById("bb").value;
   var city=  document.getElementById("cc").value;
   var course= document.getElementById("dd").value;

  document.getElementById("pp").innerHTML= fname + lname + city + course;

  document.getElementById("aa").value=""
  document.getElementById("bb").value=""
  document.getElementById("cc").value=""
  document.getElementById("dd").value=""
}



